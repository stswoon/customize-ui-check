import * as React from "react";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {Star} from "lucide-react"
import {Button} from "@/components/ui/button";
import {MyButton} from "@/components/my-ui/MyButton";

type ProductCardProps = {
    title: string;
    subtitle: string;
    price: number;
    oldPrice: number;
    currency: string; // "₽"
    rating: number;
    reviews: number;
    imageSrc: string;
    discount: number
};

function Stars({value}: { value: number }) {
    const full = Math.floor(value);
    const empty = 5 - full;

    return (
        <div className="flex items-center gap-1 text-purple-600">
            {Array.from({length: full}).map((_, i) => (
                <Star key={`f-${i}`} className="w-4 h-4 fill-current"/>
            ))}
            {Array.from({length: empty}).map((_, i) => (
                <Star key={`e-${i}`} className="w-4 h-4 stroke-current fill-transparent"/>
            ))}
        </div>
    );
}

export function ProductCardShadcn({
                                      title,
                                      subtitle,
                                      price,
                                      oldPrice,
                                      currency,
                                      rating,
                                      reviews,
                                      imageSrc,
                                      discount
                                  }: ProductCardProps) {

    return (
        <Card className="w-[300px]">
            <div className="relative h-[350px]">
                <div className="absolute inset-y-0 left-0 right-0 bg-white">
                    <div>
                        <div className="relative h-[380px] w-full">
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 380px, 380px"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-y-0 left-0">
                    <div className="p-4">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-emerald-500 text-white hover:bg-emerald-500 font-bold text-xl">
                                NEW
                            </Badge>
                        </div>

                        <div className="mt-70">
                            <Badge className="mt-2 rounded-full bg-[#E0B0FF] text-fuchsia-700 font-bold text-xl">
                                -{discount}%
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            <CardContent className="pt-4">
                <div className="flex items-end gap-3">
                    <div className="text-2xl font-extrabold">
                        {formatMoney(price)} {currency}
                    </div>
                    <div className="pb-1 text-sm text-zinc-500 line-through">
                        {formatMoney(oldPrice)} {currency}
                    </div>
                </div>

                <CardTitle className="mt-2 text-base">{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>

                <div className="mt-3 flex items-center gap-2">
                    <Stars value={rating}/>
                    <span className="text-sm text-zinc-600">{reviews}</span>
                </div>
            </CardContent>

            <CardFooter className="gap-2">
                <MyButton
                    className={cn(
                        "inline-flex flex-1",
                        "bg-fuchsia-600  font-semibold text-white",
                        "hover:bg-fuchsia-700 active:bg-fuchsia-800 transition-colors"
                    )}
                >
                    В корзину
                </MyButton>
                <Button
                    className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                        "border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
                    )}
                    aria-label="В избранное"
                    title="В избранное"
                >
                    <Heart className="h-5 w-5 text-zinc-700"/>
                </Button>
            </CardFooter>
        </Card>
    );
}

function formatMoney(v: number) {
    // 5777 -> "5 777"
    return new Intl.NumberFormat("ru-RU").format(v);
}

function Heart(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
            <path
                d="M12 21s-7-4.35-9.33-8.5C.85 9.31 2.1 6.5 4.9 5.6c1.72-.55 3.47.05 4.62 1.28L12 9.35l2.48-2.47c1.15-1.23 2.9-1.83 4.62-1.28 2.8.9 4.05 3.71 2.23 6.9C19 16.65 12 21 12 21z"
                fill="currentColor"
            />
        </svg>
    );
}