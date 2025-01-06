"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TableCell from "@tiptap/extension-table-cell";
import ImageResize from "tiptap-extension-resize-image";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

import { FontSizeExtension } from "@/extensions/font-size-extension";

import { useEditorStore } from "@/store/use-editor-store";
import { LineHeightExtension } from "@/extensions/line-height";
import {useLiveblocksExtension} from '@liveblocks/react-tiptap'
import { Ruler } from "./ruler";
import { Threads } from "../[documentId]/threads";
import { useStorage } from "@liveblocks/react";

const Editor = () => {
  const leftMargin = useStorage((root)=> root.leftMargin)
  const rightMargin = useStorage((root)=> root.rightMargin)
  const { setEditor } = useEditorStore();
  const liveblocks = useLiveblocksExtension()

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },

    editorProps: {
      attributes: {
        style: `padding-right:${rightMargin ?? '56'}px; padding-left:${leftMargin ?? "56"}px;`,
        class:
          "focus:outline-none pr-14 print:border-0 bg-white flex flex-col  pt-10 pb-10 min-h-[1054px] w-[816px] border border-[#C7C7C7]",
      },
    },
    extensions: [
      liveblocks,
      LineHeightExtension.configure({
        types: ["paragraph", "heading"],
      }),
      FontSizeExtension,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({
        autolink: true,
        defaultProtocol: "https",
        openOnClick: false,
      }),
      Highlight.configure({ multicolor: true }),
      Color,
      FontFamily,
      TextStyle,
      StarterKit.configure({ history: false }),
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Underline,
    ],
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:overflow-visible print:bg-white">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor}/>
      </div>
    </div>
  );
};

export default Editor;
