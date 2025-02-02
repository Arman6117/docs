"use client";
import React from "react";
import { useEditorStore } from "@/store/use-editor-store";

import FontFamilyButton from "./font-famiy-button";
import HeadingButton from "./heading-button";
import HighlightColorButton from "./highlight-color-button";
import ImageButton from "./image-button";
import ToolbarButton from "./toolbar-button";
import ListButton from "./list-button";
import LinkButton from "./link-button";
import TextColorButton from "./text-color-button";
import FontSize from "./font-size";
import AlignButton from "./align-button";
import LineHeightButton from "./line-height-button";
import { Separator } from "@/components/ui/separator";

import { ToolbarSection } from "@/types";

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
        isActive: editor?.isActive("liveblocksCommentMark"),
        onClick: () => editor?.chain().focus().addPendingComment().run(),
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
      <FontSize />
      <Separator orientation="vertical" className="h-7" />
      {section[1].map((item) => (
        <ToolbarButton {...item} key={item.label} />
      ))}
      <TextColorButton />
      <HighlightColorButton />
      <Separator orientation="vertical" className="h-7" />
      <LinkButton />
      <ImageButton />
      <AlignButton />
      <LineHeightButton />
      <ListButton />
      <Separator orientation="vertical" className="h-7" />
      {section[2].map((item) => (
        <ToolbarButton {...item} key={item.label} />
      ))}
    </div>
  );
};

export default Toolbar;
