import styles from "./page.module.css";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import ProductCard2, {ProductCardModel} from "@/components/ProductCard2";

const product: ProductCardModel = {
    id: "gaut-vega",
    title: "Мощный бинокль Gaut Vega с zoom-увеличением",
    imageUrl: "/images/binoculars.png",
    price: 5777,
    oldPrice: 7777,
    rating: 4.5,
    ratingCount: 77,
    promoTop: {label: "NEW", color: "success"},
    leftStrip: {
        topLine: "50 мм",
        subLine: "Диаметр объектива",
        footerLine: "PORRO",
        discountLabel: "-12%",
    },
    bottomRightBadge: "ZOOM\nУВЕЛИЧЕНИЕ",
    brandMark: {top: "Бинокль мощный", bottom: "VEGA"},
};

export default function Home() {
    return (
        <div className={styles.page}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: '#f5f5f5',
                p: 2,
                gap: 2
            }}>
                <ProductCard/>
                <ProductCard2 product={product}/>
            </Box>
        </div>
    );
}
