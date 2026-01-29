import styles from "./page.module.css";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import ProductCard2, {ProductCardModel} from "@/components/ProductCard2";
import AdminUI from "@/components/AdminUI";

const product: ProductCardModel = {
    id: "gaut-vega",
    title: "Мощный бинокль Gaut Vega с zoom-увеличением",
    imageUrl: "/img2.png",
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
                <ProductCard
                    title="Мощный бинокль Gaut Vega"
                    subtitle="с zoom-увеличением. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Versions of Lorem Ipsum."
                    price={5777}
                    oldPrice={7777}
                    currency="₽"
                    rating={4.0}
                    reviews={77}
                    imageSrc="/img2.png"
                    discount={12}
                />
                {/*<ProductCard2 product={product}/>*/}

                <AdminUI></AdminUI>
            </Box>
        </div>
    );
}
