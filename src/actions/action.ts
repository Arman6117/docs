"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

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
