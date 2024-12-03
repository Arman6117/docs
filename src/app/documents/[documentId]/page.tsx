import React from "react";
import Editor from "../_components/editor";
import Toolbar from "../_components/toolbar";

const page = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const documentId = (await params).documentId;

  console.log(documentId);
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default page;
