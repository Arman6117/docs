import TooltipWrapper from "@/components/tooltip-wrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";
import React from "react";

const AlignButton = () => {
  const { editor } = useEditorStore();
  const alignments = [
    {
      label: "Align Left",
      value: "left",
      icon: AlignLeftIcon,
    },
    {
      label: "Align Right",
      value: "right",
      icon: AlignRightIcon,
    },
    {
      label: "Align Center",
      value: "center",
      icon: AlignCenterIcon,
    },
    {
      label: "Align Justify",
      value: "justify",
      icon: AlignJustifyIcon,
    },
  ];
  return (
    <DropdownMenu>
      <TooltipWrapper label="Align">
        <DropdownMenuTrigger asChild>
          <button
            className={
              "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
            }
          >
            <AlignLeftIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
      </TooltipWrapper>
      <DropdownMenuContent className="flex flex-col gap-y-1">
        {alignments.map(({ label, icon: Icon, value }) => (
          <button
            key={label}
            className={cn(
              "flex p-1 items-center gap-x-2 hover:bg-neutral-200/80 rounded-sm",
              editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
            )}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
          >
            <Icon className="size-4 mr-2" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignButton;
