"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export async function getDocuments(ids: Id<"documents">[]) {
  return await convex.query(api.document.getByIds, { ids });
}
export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();

  const response = await clerk.users.getUserList({
    organizationId: [sessionClaims?.org_id as string],
  });

  const users = response.data.map((user) => ({
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    id: user.id,
    avatar: user.imageUrl,
  }));

  return users;
}
