'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const ToolbarButton = ({
    label,
    isActive,
    icon: Icon,
    onClick,
  }: {
    label: string;
    icon: LucideIcon;
    isActive?: boolean;
    onClick?: () => void;
  }) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={cn(
                "p-0.5 hover:bg-neutral-200/80 text-sm h-7 min-w-7 justify-center rounded-sm flex items-center",
                isActive && "bg-neutral-200/80"
              )}
              onClick={onClick}
            >
              <Icon className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="mt-2">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

export default ToolbarButton