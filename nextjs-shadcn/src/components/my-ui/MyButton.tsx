"use client"

import {Button} from "@/components/ui/button"
import {useUiStore} from "@/store/useUiStore"
import {cn} from "@/lib/utils"
import * as React from "react"

export function MyButton({className, ...props}: React.ComponentProps<typeof Button>) {
    const {buttonColor, buttonSize} = useUiStore()
    const defaultClassName = cn(
        "inline-flex flex-1",
        "bg-fuchsia-600  font-semibold text-white",
        "hover:bg-fuchsia-700 active:bg-fuchsia-800 transition-colors"
    )
    const colorClasses: Record<string, string> = {
        red: "bg-red-500 hover:bg-red-600 text-white",
        pink: "bg-pink-500 hover:bg-pink-600 text-white",
        green: "bg-green-500 hover:bg-green-600 text-white",
        gray: "bg-gray-500 hover:bg-gray-600 text-white",
    }
    const sizeClasses: Record<string, string> = {
        sm: "h-8 px-3 text-xs",
        xl: "h-12 px-8 text-lg",
        xxl: "h-14 px-10 text-xl",
        xxxl: "h-16 px-12 text-2xl",
    }
    return (
        <Button
            className={cn(
                defaultClassName, className,
                buttonColor && colorClasses[buttonColor],
                buttonSize && sizeClasses[buttonSize]
            )}
            {...props}
        />
    )
}
