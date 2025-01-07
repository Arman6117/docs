"use client";
import { BsCloudCheck } from "react-icons/bs";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const DocumentId = ({ title, id }: { title: string; id: Id<"documents"> }) => {
  const [value, setValue] = useState(title);

  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const mutate = useMutation(api.document.updateById);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue);

    //TODO:Debounced value
  }
  return (
    <div className="flex gap-2 items-center">
      {isEditing ? (
        <form className="relative w-fit max-wj">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || ""}
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5  cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      <BsCloudCheck className="tex" />
    </div>
  );
};

export default DocumentId;
