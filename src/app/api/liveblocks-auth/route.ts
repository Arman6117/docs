import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCS_SECRET_KEY!,
});
export async function POST(req: Request) {
  const { sessionClaims } = await auth();

  if (!sessionClaims) return new Response("Unauthorized", { status: 401 });

  const user = await currentUser();

  if (!user) return new Response("Unauthorized", { status: 401 });

  const { room } = await req.json();

  console.log(room);
  const document = await convex.query(api.document.getById, { id: room });

  if (!document) return new Response("Unauthorized", { status: 401 });

  const isOwner = document.ownerId === user.id;
  const isOrgMember =!!( document.orgId && document.orgId === sessionClaims.org_id);

  if (!isOrgMember && !isOwner)
    return new Response("Unauthorized", { status: 401 });

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: user.fullName ?? "Anonymous",
      avatar: user.imageUrl,
    },
  });

  session.allow(room, session.FULL_ACCESS);
  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
