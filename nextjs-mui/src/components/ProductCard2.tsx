import * as React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Rating,
    Stack,
    Typography,
} from "@mui/material";

export type ProductCardModel = {
    id: string;
    title: string;
    imageUrl: string;
    price: number; // current price
    oldPrice?: number; // crossed out
    rating?: number; // 0..5
    ratingCount?: number;

    // promo/labels (optional)
    promoTop?: { label: string; color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" };
    leftStrip?: {
        topLine?: string; // e.g. "50 мм"
        subLine?: string; // e.g. "Диаметр объектива"
        footerLine?: string; // e.g. "PORRO"
        discountLabel?: string; // e.g. "-12%"
    };
    bottomRightBadge?: string; // e.g. "ZOOM\nУВЕЛИЧЕНИЕ"
    brandMark?: { top?: string; bottom?: string }; // e.g. GAUT / VEGA
};

const rub = new Intl.NumberFormat("ru-RU", {style: "currency", currency: "RUB", maximumFractionDigits: 0});

export default function ProductCard2({product}: {
    product: ProductCardModel;
    width?: number | string;
}) {
    const {
        title,
        imageUrl,
        price,
        oldPrice,
        rating = 0,
        ratingCount,
        promoTop,
        leftStrip,
        bottomRightBadge,
        brandMark,
    } = product;

    return (
        <Card sx={{width: 300}}>
            <Box sx={{position: "relative", height: 240, bgcolor: "grey.50"}}>
                <CardMedia
                    component="img"
                    className="pcard-img"
                    image={imageUrl}
                    alt={title}
                    sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        p: 2,
                    }}
                />

                {/* left promo strip (like in screenshot) */}
                {leftStrip && (
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: 96,
                            bgcolor: "error.main",
                            color: "common.white",
                            p: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        {promoTop && (
                            <Chip
                                size="small"
                                label={promoTop.label}
                                color={promoTop.color ?? "success"}
                                sx={{alignSelf: "flex-start", fontWeight: 700, height: 22}}
                            />
                        )}

                        <Box sx={{mt: 0.5}}>
                            {leftStrip.topLine && (
                                <Typography variant="h6" sx={{lineHeight: 1, fontWeight: 900}}>
                                    {leftStrip.topLine}
                                </Typography>
                            )}
                            {leftStrip.subLine && (
                                <Typography variant="caption" sx={{display: "block", opacity: 0.95}}>
                                    {leftStrip.subLine}
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{mt: "auto"}}>
                            {leftStrip.footerLine && (
                                <Typography variant="h6" sx={{fontWeight: 900, letterSpacing: 0.5}}>
                                    {leftStrip.footerLine}
                                </Typography>
                            )}
                            {leftStrip.discountLabel && (
                                <Chip
                                    size="small"
                                    label={leftStrip.discountLabel}
                                    sx={{
                                        mt: 0.5,
                                        bgcolor: "common.white",
                                        color: "error.main",
                                        fontWeight: 900,
                                        height: 24,
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                )}

                {/* brand mark (top-right) */}
                {brandMark && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 12,
                            textAlign: "right",
                            color: "text.primary",
                        }}
                    >
                        {brandMark.top && (
                            <Typography variant="caption" sx={{display: "block", fontWeight: 700, opacity: 0.8}}>
                                {brandMark.top}
                            </Typography>
                        )}
                        {brandMark.bottom && (
                            <Chip
                                size="small"
                                label={brandMark.bottom}
                                sx={{
                                    mt: 0.5,
                                    bgcolor: "warning.main",
                                    color: "common.white",
                                    fontWeight: 900,
                                    height: 24,
                                }}
                            />
                        )}
                    </Box>
                )}

                {/* bottom-right badge */}
                {bottomRightBadge && (
                    <Box
                        sx={{
                            position: "absolute",
                            right: 10,
                            bottom: 10,
                            bgcolor: "info.main",
                            color: "common.white",
                            px: 1,
                            py: 0.5,
                            borderRadius: 2,
                            fontWeight: 900,
                            fontSize: 10,
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            whiteSpace: "pre-line",
                            boxShadow: 1,
                        }}
                    >
                        {bottomRightBadge}
                    </Box>
                )}
            </Box>

            {/* CONTENT */}
            <CardContent sx={{p: 1.5}}>
                <Stack direction="row" alignItems="baseline" spacing={1} sx={{mb: 0.5}}>
                    <Typography variant="subtitle1" sx={{fontWeight: 900}}>
                        {rub.format(price)}
                    </Typography>
                    {typeof oldPrice === "number" && oldPrice > price && (
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", textDecoration: "line-through"}}
                        >
                            {rub.format(oldPrice)}
                        </Typography>
                    )}
                </Stack>

                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: 40,
                    }}
                    title={title}
                >
                    {title}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={0.75} sx={{mt: 0.75}}>
                    <Rating value={rating} precision={0.5} readOnly size="small"/>
                    {typeof ratingCount === "number" && (
                        <Typography variant="caption" sx={{color: "text.secondary"}}>
                            {ratingCount}
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
