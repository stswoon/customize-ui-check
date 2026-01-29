import Image from "next/image";
import styles from "./page.module.css";
import cn from "classnames";
import {CardDemoBaseUi} from "@/components/CardDemoBaseUi";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            {/*<div className={cn(styles.page, "text-3xl font-bold underline")}>*/}
            {/*    Hello World!*/}
            {/*</div>*/}

            <CardDemoBaseUi/>
        </div>
    );
}
