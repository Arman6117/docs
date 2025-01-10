import React from "react";

import { useEditorStore } from "@/store/use-editor-store";

import TooltipWrapper from "@/components/tooltip-wrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ListIcon, ListOrderedIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const ListButton = () => {
  const { editor } = useEditorStore();
  const lists = [
    {
      listType: "Bullet List",
      icon: ListIcon,
      isActive: () => editor?.isActive("bulletList"),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      listType: "Ordered List",
      icon: ListOrderedIcon,
      isActive: () => editor?.isActive("orderedList"),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];
  return (
    <DropdownMenu>
      <TooltipWrapper label="Lists">
        <DropdownMenuTrigger asChild>
          <button
            className={
              "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
            }
          >
            <ListIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
      </TooltipWrapper>
      <DropdownMenuContent className="flex flex-col gap-y-1">
        {lists.map(({ icon: Icon, isActive, listType, onClick }) => (
          <button
            key={listType}
            className={cn(
              "flex p-1 items-center gap-x-2 hover:bg-neutral-200/80 rounded-sm",
              isActive() && "bg-neutral-200/80"
            )}
            onClick={onClick}
          >
            <Icon className="size-4 mr-2" />
            <span className="text-sm">{listType}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ListButton;
