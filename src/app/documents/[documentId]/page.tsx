import React from "react";
import { preloadQuery } from "convex/nextjs";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

import { auth } from "@clerk/nextjs/server";

import { Document } from "../_components/document";

const page = async ({
  params,
}: {
  params: Promise<{ documentId: Id<"documents"> }>;
}) => {
  const { documentId } = await params;
  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) throw new Error("UNAUTHORIZED");

  const preloadedDocument = await preloadQuery(
    api.document.getById,
    {
      id: documentId,
    },
    { token }
  );
  return <Document preloadedDocument={preloadedDocument} />;
};

export default page;
