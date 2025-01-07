"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEditorStore } from "@/store/use-editor-store";

import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  Table2Icon,
  TextCursor,
  TextIcon,
  Trash2Icon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { Doc } from "../../../../convex/_generated/dataModel";

const MenuBar = ({data}: {data:Doc<'documents'>}) => {
  const { editor } = useEditorStore();
  const table = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
  ];

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const download = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };

  const onSaveJson = () => {
    if (!editor) return;
    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    download(blob, `${data.title}.json`); 
  };
  const onSaveHTML = () => {
    if (!editor) return;
    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    download(blob, `${data.title}.html`);
  };
  const onSaveText = () => {
    if (!editor) return;
    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    download(blob, `${data.title}.txt`); 
  };

  return (
    <div className="flex">
      <Menubar className="border-none bg-transparent h-auto p-0 shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">File</MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger>
                <FileIcon className="menubarIcon" />
                Save
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={onSaveJson}>
                  <FileJsonIcon className="menubarIcon" />
                  JSON
                </MenubarItem>
                <MenubarItem onClick={onSaveHTML}>
                  <GlobeIcon className="menubarIcon" />
                  HTML
                </MenubarItem>
                <MenubarItem onClick={() => window.print()}>
                  <BsFilePdf className="menubarIcon" />
                  PDF
                </MenubarItem>
                <MenubarItem onClick={onSaveText}>
                  <TextIcon className="menubarIcon" />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <FilePlusIcon className="menubarIcon" />
              New Document
            </MenubarItem>
            <MenubarItem>
              <FilePenIcon className="menubarIcon" />
              Rename Document
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Trash2Icon className="menubarIcon" />
              Remove
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => window.print()}>
              <PrinterIcon className="menubarIcon" />
              Print
              <MenubarShortcut>Ctrl P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2Icon className="menubarIcon" />
              Undo
              <MenubarShortcut>Ctrl Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
              <Redo2Icon className="menubarIcon" />
              Redo
              <MenubarShortcut>Ctrl Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger className="menubarTrigger">
                <Table2Icon className="menubarIcon" />
                Table
              </MenubarSubTrigger>
              <MenubarSubContent>
                {table.map((row, i) => (
                  <MenubarItem
                    key={i}
                    onClick={() => insertTable({ rows: row[0], cols: row[1] })}
                  >
                    {row[0]}x{row[1]}
                  </MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Format</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <TextCursor className="menubarIcon" />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <BoldIcon className="menubarIcon" />
                  Bold <MenubarShortcut>Ctrl B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <ItalicIcon className="menubarIcon" />
                  Italic <MenubarShortcut>Ctrl I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    editor?.chain().focus().toggleUnderline().run()
                  }
                >
                  <UnderlineIcon className="menubarIcon" />
                  Underline <MenubarShortcut>Ctrl U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                >
                  <StrikethroughIcon className="menubarIcon" />
                  Strikethrough &nbsp;
                  <MenubarShortcut>Ctrl S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem
              onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            >
              <RemoveFormattingIcon className="menubarIcon" />
              Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;
