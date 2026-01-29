"use client"

import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import { useUiStore } from "@/store/useUiStore";

export function AdminUi() {
    const { buttonColor, setButtonColor, buttonSize, setButtonSize, fontSize, setFontSize } = useUiStore();

    return <div className="flex flex-col gap-4 bg-red-50 p-5 rounded-xl">
        <NativeSelect 
            value={buttonColor} 
            onChange={(e) => setButtonColor(e.target.value)}
        >
            <NativeSelectOption value="">Button Color</NativeSelectOption>
            <NativeSelectOption value="red">red</NativeSelectOption>
            <NativeSelectOption value="pink">pink</NativeSelectOption>
            <NativeSelectOption value="green">green</NativeSelectOption>
            <NativeSelectOption value="gray">gray</NativeSelectOption>
        </NativeSelect>

        <NativeSelect
            value={buttonSize}
            onChange={(e) => setButtonSize(e.target.value)}
        >
            <NativeSelectOption value="">Button Size</NativeSelectOption>
            <NativeSelectOption value="sm">small</NativeSelectOption>
            <NativeSelectOption value="xl">xl</NativeSelectOption>
            <NativeSelectOption value="xxl">xxl</NativeSelectOption>
            <NativeSelectOption value="xxxl">xxxl</NativeSelectOption>
        </NativeSelect>

        <NativeSelect
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
        >
            <NativeSelectOption value="">Title Size</NativeSelectOption>
            <NativeSelectOption value="sm">small</NativeSelectOption>
            <NativeSelectOption value="xl">xl</NativeSelectOption>
            <NativeSelectOption value="xxl">xxl</NativeSelectOption>
            <NativeSelectOption value="xxxl">xxxl</NativeSelectOption>
        </NativeSelect>
    </div>
}
