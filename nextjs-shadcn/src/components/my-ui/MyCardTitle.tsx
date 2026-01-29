"use client"

import * as React from "react"
import {CardTitle} from "@/components/ui/card"
import {useUiStore} from "@/store/useUiStore"
import {cn} from "@/lib/utils"

export function MyCardTitle({className, ...props}: React.ComponentProps<typeof CardTitle>) {
    const {fontSize} = useUiStore()

    const defaultClassName = cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
    );

    const sizeClasses: Record<string, string> = {
        sm: "text-sm",
        xl: "text-xl",
        xxl: "text-2xl",
        xxxl: "text-3xl",
    }

    return (
        <CardTitle
            className={cn(
                defaultClassName, className,
                fontSize && sizeClasses[fontSize]
            )}
            {...props}
        />
    )
}
