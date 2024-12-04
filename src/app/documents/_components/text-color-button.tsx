"use client";

import TooltipWrapper from "@/components/tooltip-wrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { useEditorStore } from "@/store/use-editor-store";
import { SketchPicker, type ColorResult } from "react-color";
const TextColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };
  return (
    <DropdownMenu>
      <TooltipWrapper label="Text Color">
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
          )}
        >
          <span className="text-xs">A</span>
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

export default TextColorButton;
