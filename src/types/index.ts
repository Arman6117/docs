import { LucideIcon } from "lucide-react";

export type ToolbarSection = {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}[][];
