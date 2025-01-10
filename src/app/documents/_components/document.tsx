"use client";
import React from "react";

import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import Editor from "../_components/editor";
import Toolbar from "../_components/toolbar";
import Navbar from "../_components/navbar";
import Room from "../[documentId]/room";

export const Document = ({
  preloadedDocument,
}: {
  preloadedDocument: Preloaded<typeof api.document.getById>;
}) => {
  const document = usePreloadedQuery(preloadedDocument);
  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfd]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0  fixed z-10 bg-[#fafbfd] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[144px] print:pt-0">
          <Editor initialContent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
};
