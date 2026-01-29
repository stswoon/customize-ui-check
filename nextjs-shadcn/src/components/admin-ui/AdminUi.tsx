import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";

export function AdminUi() {
    return <div className="flex flex-col gap-4 bg-red-50 p-5 rounded-xl">
        <NativeSelect>
            <NativeSelectOption value="">Button Color</NativeSelectOption>
            <NativeSelectOption value="red">red</NativeSelectOption>
            <NativeSelectOption value="pink">pink</NativeSelectOption>
            <NativeSelectOption value="green">green</NativeSelectOption>
            <NativeSelectOption value="default">grai</NativeSelectOption>
        </NativeSelect>

        <NativeSelect>
            <NativeSelectOption value="">Button Size</NativeSelectOption>
            <NativeSelectOption value="sm">small</NativeSelectOption>
            <NativeSelectOption value="xl">xl</NativeSelectOption>
            <NativeSelectOption value="xxl">xxl</NativeSelectOption>
            <NativeSelectOption value="xxxl">xxxl</NativeSelectOption>
        </NativeSelect>

        <NativeSelect>
            <NativeSelectOption value="">Button Size</NativeSelectOption>
            <NativeSelectOption value="sm">small</NativeSelectOption>
            <NativeSelectOption value="xl">xl</NativeSelectOption>
            <NativeSelectOption value="xxl">xxl</NativeSelectOption>
            <NativeSelectOption value="xxxl">xxxl</NativeSelectOption>
        </NativeSelect>
    </div>
}