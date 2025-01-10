"use client";

import { ClientSideSuspense } from "@liveblocks/react";

import { useInboxNotifications } from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { BellIcon } from "lucide-react";

export const Inbox = () => {
  return (
    <ClientSideSuspense
      fallback={
        <Button variant={"ghost"} className="relative" size={"icon"}>
          <BellIcon className="size-5" />
        </Button>
      }
    >
      <InboxMenu />
    </ClientSideSuspense>
  );
};

const InboxMenu = () => {
  const { inboxNotifications } = useInboxNotifications();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="relative" size={"icon"}>
          <BellIcon className="size-5" />
          {inboxNotifications.length > 0 && (
            <span className="absolute top-1 -right-1 text-white text-xs size-4 rounded-full bg-purple-500">
              {inboxNotifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        {inboxNotifications.length > 0 ? (
          <InboxNotificationList>
            {inboxNotifications.map((inboxNotification) => (
              <InboxNotification
                key={inboxNotification.id}
                inboxNotification={inboxNotification}
              />
            ))}
          </InboxNotificationList>
        ) : (
          <div className="p-2 w-[400px] text-center text-muted-foreground text-sm">
            No new notification
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
