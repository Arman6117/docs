"use client";
import React from "react";

import { Separator } from "@/components/ui/separator";

import { ToolbarSection } from "@/types";

import ToolbarButton from "./toolbar-button";
import FontFamilyButton from "./font-famiy-button";

import {
  Bold,
  Italic,
  ListTodo,
  MessageSquare,
  Printer,
  Redo2,
  RemoveFormattingIcon,
  SpellCheck,
  Underline,
  Undo2,
} from "lucide-react";

import { useEditorStore } from "@/store/use-editor-store";
import HeadingButton from "./heading-button";

const Toolbar = () => {
  const { editor } = useEditorStore();
  const section: ToolbarSection = [
    [
      {
        label: "Undo",
        icon: Undo2,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: Printer,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheck,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: Bold,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: Italic,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: Underline,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquare,
        isActive: false, //TODO
        onClick: () => console.log("Comment"),
      },
      {
        label: "List Todo",
        icon: ListTodo,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];
  return (
    <div className="min-h-[40px] bg-[#F1F4F9] flex py-2 items-center rounded-[24px] px-2.5 gap-x-2">
      {section[0].map((item) => (
        <ToolbarButton {...item} key={item.label} />
      ))}
      <Separator orientation="vertical" className="h-7" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-7" />
      <HeadingButton />
      <Separator orientation="vertical" className="h-7" />
      {/*//TODO: Font Size*/}
      <Separator orientation="vertical" className="h-7" />
      {section[1].map((item) => (
        <ToolbarButton {...item} key={item.label} />
      ))}
      {/*//TODO: Text Color*/}
      {/*//TODO: Highlight Color*/}
      <Separator orientation="vertical" className="h-7" />
      {/*//TODO: Link*/}
      {/*//TODO: Image*/}
      {/*//TODO: Align*/}
      {/*//TODO: Line height*/}
      {/*//TODO: List*/}
      <Separator orientation="vertical" className="h-7" />
      {section[2].map((item) => (
        <ToolbarButton {...item} key={item.label} />
      ))}
    </div>
  );
};

export default Toolbar;
