"use client";

import { useEditorStore } from "@/store/use-editor-store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TooltipWrapper from "@/components/tooltip-wrapper";

import { SketchPicker, type ColorResult } from "react-color";

import { HighlighterIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const HighlightColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#FFFFFF";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };
  return (
    <DropdownMenu>
      <TooltipWrapper label="Add Highlight">
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
          )}
        >
          <HighlighterIcon className="size-4" />
          <div className=" h-0.5 w-full" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
        </TooltipWrapper>
      <DropdownMenuContent className="border-0 p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HighlightColorButton;
