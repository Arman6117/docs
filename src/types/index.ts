// import { EmailAddress } from "@clerk/nextjs/server";
import { LucideIcon } from "lucide-react";

export type ToolbarSection = {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}[][];

export type User = {
  id: string;
  name: string ;
  avatar: string;
};
