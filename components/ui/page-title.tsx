import * as React from "react"

import { cn } from "@/lib/utils"

function PageTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <div
      data-slot="page-title"
      className={cn(
        "text-center font-medium text-6xl mb-18 sm:mb-24 mt-10 sm:mt-12",
        className
      )}
      {...props}
    />
  )
}

export { PageTitle }