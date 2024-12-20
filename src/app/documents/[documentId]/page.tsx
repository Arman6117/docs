import React from "react";
import Editor from "../_components/editor";
import Toolbar from "../_components/toolbar";
import Navbar from "../_components/navbar";

const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const documentId = (await params).documentId;

  console.log(documentId);
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0  fixed z-10 bg-[#fafbfd] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[144px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default page;
