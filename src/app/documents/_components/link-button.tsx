"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import { useEditorStore } from "@/store/use-editor-store";

import { Link2Icon } from "lucide-react";
import TooltipWrapper from "@/components/tooltip-wrapper";
const LinkButton = () => {
  const { editor } = useEditorStore();
  const [value, setValue] = useState("");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };
  return (
    <DropdownMenu
      onOpenChange={() => setValue(editor?.getAttributes("link").href)}
    >
      <TooltipWrapper label="Insert Link">
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "rounded-sm shrink-0 h-7 min-w-7 flex flex-col items-center justify-between font-medium text-sm p-1 hover:bg-neutral-200/80"
          )}
        >
          <Link2Icon className="size-5" />
          <div className=" h-0.5 w-full" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
        </TooltipWrapper>
      <DropdownMenuContent className="flex p-2.5 items-center gap-x-2">
        <Input
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkButton;
