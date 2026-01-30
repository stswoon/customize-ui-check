"use client";

import React from 'react';
import {useUIStore} from "../store/useUIStore";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    Rating,
    Chip,
    Button,
    CardMedia,
    CardActions
} from '@mui/material';

const rub = new Intl.NumberFormat("ru-RU", {style: "currency", currency: "RUB", maximumFractionDigits: 0});

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

//TODO theme!!!

function propsMapping({cardTitleSize, buttonSize, buttonColor}) {
    // Logic for button color
    let btnColorProp: any = "secondary";
    let btnSx = {};
    if (buttonColor === 'red') btnColorProp = 'error';
    else if (buttonColor === 'green') btnColorProp = 'success';
    else if (buttonColor === 'pink') btnColorProp = 'secondary';
    else if (buttonColor === 'gray') {
        btnColorProp = 'inherit';
        btnSx = {bgcolor: 'grey.500', color: 'white', '&:hover': {bgcolor: 'grey.700'}};
    }
    // Logic for button size
    let btnSizeProp: any = "small";
    let btnSizeSx = {};
    if (buttonSize === 'sm') btnSizeProp = 'small';
    else if (buttonSize === 'xl') btnSizeProp = 'large';
    else if (buttonSize === 'xxl') {
        btnSizeProp = 'large';
        btnSizeSx = {fontSize: '1.25rem'};
    } else if (buttonSize === 'xxxl') {
        btnSizeProp = 'large';
        btnSizeSx = {fontSize: '1.5rem'};
    }

    // Logic for card title size
    let titleVariant: any = "body2";
    if (cardTitleSize === 'sm') titleVariant = 'body2';
    else if (cardTitleSize === 'xl') titleVariant = 'h6';
    else if (cardTitleSize === 'xxl') titleVariant = 'h5';
    else if (cardTitleSize === 'xxxl') titleVariant = 'h4';

    return {titleVariant, btnSizeProp, btnColorProp, btnSizeSx, btnSx}
}

export function ProductCardMUI(
    {title, subtitle, price, oldPrice, currency, rating, reviews, imageSrc, discount}: ProductCardProps
) {
    const {buttonColor, buttonSize, cardTitleSize} = useUIStore();
    const {
        titleVariant, btnSizeProp, btnColorProp, btnSizeSx, btnSx
    } = propsMapping({buttonColor, buttonSize, cardTitleSize});

    return (
        <Card sx={{width: 300}}>
            <Box sx={{position: 'relative', height: 380}}>
                <Box sx={{position: 'relative', zIndex: 1, height: '100%'}}>
                    <CardMedia
                        component="img" image={imageSrc} alt={title}
                        sx={{
                            zIndex: 2, position: 'absolute', top: 0, left: 0,
                            height: "100%", width: "100%", objectFit: "contain",
                        }}
                    />

                    <Stack direction="column" justifyContent="space-between" padding={1}
                           sx={{position: 'absolute', height: '100%', zIndex: 100}}>
                        <Chip label="NEW" color="success" sx={{fontWeight: 'bold'}}/>
                        <Chip label={`-${discount}%`} color="secondary" sx={{fontWeight: 'bold'}}/>
                    </Stack>
                </Box>
            </Box>

            <CardContent sx={{pt: 1, pb: '16px !important'}}>
                <Stack direction="row" alignItems="baseline" spacing={1} sx={{mb: 1}}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>{rub.format(price)}</Typography>
                    <Typography variant="body2" sx={{textDecoration: 'line-through', color: 'text.secondary'}}>
                        {rub.format(oldPrice)}
                    </Typography>
                </Stack>

                <Typography variant={titleVariant} sx={{fontWeight: 500, mb: 1}}>{title}</Typography>
                <Typography variant="body2">{subtitle}</Typography>

                <Stack direction="row" alignItems="center" spacing={1} paddingTop={1}>
                    <Rating value={rating} readOnly size="small" sx={{color: '#D500F9'}}/>
                    <Typography variant="caption" color="text.secondary">{reviews}</Typography>
                </Stack>
            </CardContent>

            <CardActions>
                <Button size={btnSizeProp} variant="contained" color={btnColorProp} sx={{...btnSizeSx, ...btnSx}}>
                    В Корзину
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCardMUI;
