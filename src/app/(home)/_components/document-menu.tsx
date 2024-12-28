"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ExternalLink,
  FilePenIcon,
  MoreVertical,
  TrashIcon,
} from "lucide-react";

import { Id } from "../../../../convex/_generated/dataModel";
import RenameDialog from "../../../components/rename-dialog";
import RemoveDialog from "@/components/remove-dialog";
import { useState } from "react";

interface DocumentMenuProps {
  id: Id<"documents">;
  title: string;
}
const DocumentMenu = ({ id, title }: DocumentMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleWindowOpen = () => {
    window.open(`/documents/${id}`);
  };

  return (
    <>
      <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
        {openMenu && (
          <DropdownMenuContent
            className="space-y-2"
            onClick={(e) => e.preventDefault()}
          >
            <DropdownMenuItem
              className="cursor-pointer "
              onClick={handleWindowOpen}
            >
              <ExternalLink className="size-4 mr-2" />
              <span>Open in New Window</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(false);
                setOpenDialog(true);
              }}
              onSelect={(e) => e.preventDefault()}
              className="cursor-pointer "
            >
              <FilePenIcon className="size-4 mr-2" />
              Rename
            </DropdownMenuItem>
            <RemoveDialog documentId={id}>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-destructive cursor-pointer  text-white hover:text-black"
              >
                <TrashIcon className="size-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </RemoveDialog>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
      <RenameDialog
        dialogOpen={openDialog}
        initialTitle={title}
        documentId={id}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
};

export default DocumentMenu;
