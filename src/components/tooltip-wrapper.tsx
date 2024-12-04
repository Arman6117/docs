import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipWrapper = ({children,label}:{children:React.ReactNode,label:string}) => {
  return (
    <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent side="top" className="mt-2">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  )
}

export default TooltipWrapper