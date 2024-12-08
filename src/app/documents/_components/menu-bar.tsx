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

const MenuBar = () => {
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
                <MenubarItem>
                  <FileJsonIcon className="menubarIcon" />
                  JSON
                </MenubarItem>
                <MenubarItem>
                  <GlobeIcon className="menubarIcon" />
                  HTML
                </MenubarItem>
                <MenubarItem>
                  <BsFilePdf className="menubarIcon" />
                  PDF
                </MenubarItem>
                <MenubarItem>
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
            <MenubarItem>
              <PrinterIcon className="menubarIcon" />
              Print
              <MenubarShortcut>Ctrl P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menubarTrigger">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo2Icon className="menubarIcon" />
              Undo
              <MenubarShortcut>Ctrl Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
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
                <MenubarItem>1 x 1</MenubarItem>
                <MenubarItem>2 x 2</MenubarItem>
                <MenubarItem>3 x 3</MenubarItem>
                <MenubarItem>4 x 4</MenubarItem>
                <MenubarItem>5 x 5</MenubarItem>
                <MenubarItem>6 x 6</MenubarItem>
                <MenubarItem>7 x 7</MenubarItem>
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
                <MenubarItem>
                  <BoldIcon className="menubarIcon" />
                  Bold &nbsp;<MenubarShortcut>Ctrl B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <ItalicIcon className="menubarIcon" />
                  Italic <MenubarShortcut>Ctrl I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <UnderlineIcon className="menubarIcon" />
                  Underline <MenubarShortcut>Ctrl U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <StrikethroughIcon className="menubarIcon" />
                  Strikethrough &nbsp;
                  <MenubarShortcut>Ctrl S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
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
