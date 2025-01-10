"use client";

import { useState } from "react";

import { useEditorStore } from "@/store/use-editor-store";

import { MinusIcon, PlusIcon } from "lucide-react";

const FontSize = () => {
  const { editor } = useEditorStore();
  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);

    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(fontSize);
    
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  };
  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex gap-x-2 items-center">
      <button
        className="h-7 w-7 flex items-center rounded-sm justify-center px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80 "
        onClick={decrement}
      >
        <MinusIcon className="size-4" />
      </button>
      {isEditing ? (
        <>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="h-7 w-10 border cursor-text border-neutral-400 rounded-sm px-1.5 overflow-hidden text-sm bg-transparent focus:ring-0  focus:outline-none "
          />
        </>
      ) : (
        <>
          <button
            className="h-7 w-10 border cursor-text border-neutral-400 rounded-sm px-1.5 overflow-hidden text-sm bg-neutral-200/80 "
            onClick={() => {
              setIsEditing(true);
              setFontSize(currentFontSize);
            }}
          >
            {currentFontSize}
          </button>
        </>
      )}
      <button
        className="h-7 w-7 flex items-center rounded-sm justify-center px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80 "
        onClick={increment}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
};

export default FontSize;
