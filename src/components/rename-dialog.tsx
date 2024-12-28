"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

import { Id } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  dialogOpen: boolean;
  setOpenDialog: (isOpen: boolean) => void;
}
const RenameDialog = ({
  dialogOpen,
  setOpenDialog,
  documentId,
  initialTitle,
}: RenameDialogProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [isUpdating, setIsUpdating] = useState(false);

  const rename = useMutation(api.document.updateById);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    rename({ id: documentId, newTitle: title })
      .then(() => {
        setOpenDialog(false);
        toast.success("Successfully updated");
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsUpdating(false));
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={setOpenDialog}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Rename Document</DialogTitle>
            <DialogDescription>Rename this document</DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Document name"
            />
          </div>
          <DialogFooter>
            <Button
              onClick={(e) => e.stopPropagation()}
              disabled={isUpdating}
              variant={"ghost"}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isUpdating}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameDialog;
