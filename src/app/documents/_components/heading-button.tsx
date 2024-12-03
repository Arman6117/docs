"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Level } from "@tiptap/extension-heading";
import { ChevronDownIcon } from "lucide-react";

const HeadingButton = () => {
  const { editor } = useEditorStore();

  const heading = [
    { label: "Normal text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "34px" },
    { label: "Heading 2", value: 2, fontSize: "26px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];

  const getHeadingLevel = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal Text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "rounded-sm shrink-0 h-7 min-w-7 flex items-center justify-between font-medium text-sm p-1.5 hover:bg-neutral-200/80"
          )}
        >
          <span className="truncate">{getHeadingLevel()}</span>
          <ChevronDownIcon className="size-4 ml-2 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {heading.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={cn(
              "flex gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 items-center",
              ((value === 0 && !editor?.isActive("heading")) ||
                editor?.isActive("heading", { level:value })) &&
                "bg-neutral-200/80"
            )}
            style={{ fontSize }}
            onClick={() => {
              if(value ===0) {
                editor?.chain().focus().setParagraph().run()
              } else {
                editor?.chain().focus().setHeading({level:value as Level}).run()
              }
            }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeadingButton;
