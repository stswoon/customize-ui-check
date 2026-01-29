"use client"

import * as React from "react"
import {CardTitle} from "@/components/ui/card"
import {useUiStore} from "@/store/useUiStore"
import {cn} from "@/lib/utils"

export function MyCardTitle({className, ...props}: React.ComponentProps<typeof CardTitle>) {
    const {fontSize} = useUiStore()
    const sizeClasses: Record<string, string> = {
        sm: "text-sm",
        xl: "text-xl",
        xxl: "text-2xl",
        xxxl: "text-3xl",
    }
    return (
        <CardTitle
            className={cn(
                className,
                fontSize && sizeClasses[fontSize]
            )}
            {...props}
        />
    )
}
