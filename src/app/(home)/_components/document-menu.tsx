import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ExternalLink, MoreVertical, PenIcon } from "lucide-react";

import { Id } from "../../../../convex/_generated/dataModel";
import RenameDialog from "../../../components/rename-dialog";

interface DocumentMenuProps {
  id: Id<"documents">;
}
const DocumentMenu = ({ id }: DocumentMenuProps) => {
  const handleWindowOpen = () => {
    window.open(`/documents/${id}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="space-y-2"
        onClick={(e) => e.preventDefault()}
      >
        <DropdownMenuItem
          className="cursor-pointer text-sm"
          onClick={handleWindowOpen}
        >
          <ExternalLink className="size-4" />
          <span>Open in New Window</span>
        </DropdownMenuItem>
        <RenameDialog documentId={id}>
          <DropdownMenuItem
            className="text-sm cursor-pointer"
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <PenIcon className="size-4" />
            Rename
          </DropdownMenuItem>
        </RenameDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentMenu;
