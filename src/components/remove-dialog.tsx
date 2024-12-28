"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogHeader,
} from "./ui/alert-dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
const RemoveDialog = ({
  documentId,
  children,
}: {
  documentId: Id<"documents">;
  children: React.ReactNode;
}) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const remove = useMutation(api.document.deleteById);

  const handleClick = () => {
    setIsRemoving(true);
    remove({ id: documentId })
      .then(() => toast.success("Successfully Deleted"))
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsRemoving(false));
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Document</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this document?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isRemoving}
            onClick={(e) => e.stopPropagation()}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            disabled={isRemoving}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveDialog;
