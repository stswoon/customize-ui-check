import React from 'react';
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

export function ProductCard(
    {title, subtitle, price, oldPrice, currency, rating, reviews, imageSrc, discount}: ProductCardProps
) {
    return (
        <Card sx={{maxWidth: 300}}>
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

                <Typography variant="body2" sx={{fontWeight: 500, mb: 1}}>{title}</Typography>
                <Typography variant="body2">{subtitle}</Typography>

                <Stack direction="row" alignItems="center" spacing={1} paddingTop={1}>
                    <Rating value={rating} readOnly size="small" sx={{color: '#D500F9'}}/>
                    <Typography variant="caption" color="text.secondary">
                        {reviews}
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions>
                <Button size="small" variant="contained" color="secondary">В Корзину</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
