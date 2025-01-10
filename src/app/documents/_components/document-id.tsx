"use client";
import React, { useRef, useState } from "react";

import { useStatus } from "@liveblocks/react";
import { useMutation } from "convex/react";

import { useDebounce } from "@/hooks/use-debounce";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

import { toast } from "sonner";

import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { LoaderIcon } from "lucide-react";

const DocumentId = ({ title, id }: { title: string; id: Id<"documents"> }) => {
  const [value, setValue] = useState(title);

  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const status = useStatus();

  const inputRef = useRef<HTMLInputElement>(null);
  const mutate = useMutation(api.document.updateById);

  const debounceUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;

    setIsPending(true);
    mutate({ id, newTitle: newValue })
      .then(() => toast.success("Title updated"))
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false));
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    mutate({ id, newTitle: value })
      .then(() => {
        toast.success("Title updated");

        setIsEditing(false);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsPending(false));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    debounceUpdate(newValue);
  };

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";
  return (
    <div className="flex gap-2 items-center">
      {isEditing ? (
        <form className="relative w-fit max-w" onSubmit={handleSubmit}>
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || ""}
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            onBlur={() => setIsEditing(false)}
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
      {!showLoader && !showError && <BsCloudCheck className="size-4" />}
      {showLoader && (
        <LoaderIcon className="size-4 text-muted-foreground animate-spin" />
      )}
      {showError && <BsCloudSlash className="size-4" />}
    </div>
  );
};

export default DocumentId;
