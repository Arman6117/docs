"use client";
import { TableCell, TableRow } from "@/components/ui/table";

import { Doc } from "../../../../convex/_generated/dataModel";
import { format } from "date-fns";

import { SiGoogledocs } from "react-icons/si";
import { Building2Icon, CircleUserIcon } from "lucide-react";

import DocumentMenu from "./document-menu";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/clerk-react";
interface DocumentRowProps {
  document: Doc<"documents">;
}

const DocumentRow = ({ document }: DocumentRowProps) => {
  const router = useRouter();
  const { organization } = useOrganization();

  return (
    <TableRow
      onClick={() => router.push(`/documents/${document._id}`)}
      className="cursor-pointer"
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="fill-blue-500 size-6" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%] ">
        {document.title}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {document.orgId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document.orgId ? organization?.name : "Personal"}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell ">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell className="flex justify-end">
        <DocumentMenu title={document.title} id={document._id} />
      </TableCell>
    </TableRow>
  );
};

export default DocumentRow;
