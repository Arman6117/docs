"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

import { Id } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";

interface RenameDialogProps {
  children: React.ReactNode;
  documentId: Id<"documents">;
}
const RenameDialog = ({ children, documentId }: RenameDialogProps) => {
  const [title, setTitle] = useState("Initial title");
  const [open, setOpen] = useState(false);


  return (
    <Dialog >
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={()=> console.log("Submitted")}>
          <DialogHeader>
            <DialogTitle>Rename Document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input onChange={(e) => setTitle(e.target.value)} value={title} />
          </div>
          <DialogFooter>
            <Button variant={"ghost"} type="button">
              Cancel
            </Button>

            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameDialog;
