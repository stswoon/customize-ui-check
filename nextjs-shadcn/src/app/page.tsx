import {ProductCard} from "@/components/product-card";
import {ProductCardShadcn} from "@/components/product-card2";
import {AdminUi} from "@/components/admin-ui/AdminUi";

export default function Home() {
    return (
        <div className="flex items-center justify-around min-h-screen bg-gray-100 p-8 gap-2">
            {/*<ProductCard/>*/}
            <ProductCardShadcn
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

            <AdminUi/>
        </div>
    );
}
