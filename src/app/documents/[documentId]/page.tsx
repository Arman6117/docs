import React from "react";
import { preloadQuery } from "convex/nextjs";
import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "../_components/document";
import { auth } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const page = async ({
  params,
}: {
  params: Promise<{ documentId: Id<"documents"> }>;
}) => {
  const { documentId } = await params;
  const { getToken } = await auth();
  const token = await getToken({ template: "convex" }) ?? undefined;

  if (!token) throw new Error("UNAUTHORIZED");

  const preloadedDocument = await preloadQuery(api.document.getById, {
    id: documentId,
  }, {token});
  return <Document preloadedDocument={preloadedDocument} />;
};

export default page;
