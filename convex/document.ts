import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const deleteById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    const document = await ctx.db.get(args.id);

    if (!user) throw new Error("Unauthorized");
    if (!document) throw new Error("Document not found");
    //TODO:Add check for org and is user is owner
    const isOrg = user.orgId === document.orgId;
    const isOwner = user.subject === document.ownerId;

    if (!isOwner && !isOrg) throw new Error("Unauthorized");

    return await ctx.db.delete(args.id);
  },
});
export const updateById = mutation({
  args: { id: v.id("documents"), newTitle: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    const document = await ctx.db.get(args.id);

    if (!document) throw new Error("Document not found");

    //TODO:Add check for org and is user is owner

    if (!user) throw new Error("Unauthorized");
    const isOrg = user.orgId === document.orgId;
    const isOwner = user.subject === document.ownerId;
    if (!isOwner && !isOrg) throw new Error("Unauthorized");

    return await ctx.db.patch(args.id, { title: args.newTitle });
  },
});
export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new Error("Unauthenticated");
    }
    const orgId = (user.orgId ?? undefined) as string | undefined;

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: user.subject,
      orgId,
      initialContent: args.initialContent,
    });
  },
});
export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) throw new Error("Unauthorized");

    //*SEARCH WITHIN THE ORG
    const orgId = (user.orgId ?? undefined) as string | undefined;

    if (search && orgId)
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("orgId", orgId)
        )
        .paginate(paginationOpts);

    //*NORMAL SEARCH
    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) => {
          return q.search("title", search).eq("ownerId", user.subject);
        })
        .paginate(paginationOpts);
    }

    //*DOCUMENTS ONLY FROM ORG
    if (orgId)
      return await ctx.db
        .query("documents")
        .withIndex("by_org_id", (q) => q.eq("orgId", orgId))
        .paginate(paginationOpts);

    //*NORMAL GET ALL DOCUMENTS
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(paginationOpts);
  },
});
