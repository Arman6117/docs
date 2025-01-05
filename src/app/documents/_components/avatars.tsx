"use client";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { Separator } from "@/components/ui/separator";
import { Loader2Icon } from "lucide-react";
const AVATAR_SIZE = 36;

export const Avatars = () => {
  return (
    <ClientSideSuspense
      fallback={<Loader2Icon className="animate-spin size-4" />}
    >
      <AvatarStack />
    </ClientSideSuspense>
  );
};
const AvatarStack = () => {
  const users = useOthers();
  const currentUser = useSelf();
  if (users.length === 0) return null;

  return (
    <>
      <div className="flex items-center">
        {currentUser && (
          <div className="relative ml-2">
            <Avatar name="You" src={currentUser.info.avatar} />
          </div>
        )}
        <div className="flex">
          {users.map(({ connectionId, info }) => {
            return (
              <Avatar name={info.name} src={info.avatar} key={connectionId} />
            );
          })}
        </div>
      </div>
      <Separator orientation="vertical" className="h-7"  />
    </>
  );
};
const Avatar = ({ name, src }: { name: string; src: string }) => {
  return (
    <div
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      className="group ml-2 place-content-center shrink-0 flex relative border-4 border-white rounded-full bg-gray-400"
    >
      <div className="opacity-0 group-hover:opacity-100 px-1 absolute top-full py-1 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
        {name}
      </div>
      <img src={src} alt={name} className="size-full rounded-full" />
    </div>
  );
};
