"use client";

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { LoaderIcon } from "lucide-react";
import DocumentRow from "./document-row";
import { Button } from "@/components/ui/button";

const DocumentTable = ({ searchParams }: { searchParams: string }) => {
  
  const {
    loadMore,
    results: documents,
    status,
  } = usePaginatedQuery(api.document.get, {search:searchParams}, { initialNumItems: 5 });
  return (
    <div className="flex flex-col gap-5 px-16 py-6 mx-auto max-w-screen">
      {documents === undefined ? (
        <div className="flex justify-center items-center">
          <LoaderIcon className="animate-spin text-muted-foreground size-5" />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead>Name</TableHead>
              <TableHead>&nbsp;</TableHead>
              <TableHead>Shared</TableHead>
              <TableHead>Created at</TableHead>
            </TableRow>
          </TableHeader>
          {documents.length === 0 ? (
            <TableBody>
              <TableRow className="hover:bg-transparent border-none">
                <TableCell
                  colSpan={4}
                  className=" h-24 text-center  text-muted-foreground"
                >
                  No documents found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map((doc) => (
                <DocumentRow key={doc._id} document={doc} />
              ))}
            </TableBody>
          )}
        </Table>
      )}
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => loadMore(5)}
          disabled={status !== "CanLoadMore"}
        >
          {status != "CanLoadMore" ? "End of results" : "Load More"}
        </Button>
      </div>
    </div>
  );
};

export default DocumentTable;
