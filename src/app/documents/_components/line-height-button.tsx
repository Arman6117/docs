"use client";

import TooltipWrapper from "@/components/tooltip-wrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { ListCollapseIcon } from "lucide-react";

const LineHeightButton = () => {
  const { editor } = useEditorStore();
  const lineHeight = [
    {
      label: "Default",
      value: "normal",
    },
    {
      label: "Single",
      value: "1.5",
    },
    {
      label: "1.15",
      value: "1.15",
    },
    {
      label: "1.5",
      value: "1.5",
    },
    {
      label: "Double",
      value: "2",
    },
  ];
  return (
    <DropdownMenu>
      <TooltipWrapper label="Line Height">
        <DropdownMenuTrigger asChild>
          <button
            className={
              "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
            }
          >
            <ListCollapseIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
      </TooltipWrapper>
      <DropdownMenuContent className="flex flex-col gap-y-1">
        {lineHeight.map(({ label, value }) => (
          <button
            key={label}
            className={cn(
              "flex p-1 items-center gap-x-2 hover:bg-neutral-200/80 rounded-sm",
              editor?.getAttributes("paragraph" ).lineHeight === value && "bg-neutral-200/80"
            )}
            onClick={() => editor?.commands.setLineHeight(value)}
          >
            
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;
