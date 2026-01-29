import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Link from './Link';

export default function Home() {
    return (
        <div className={styles.page}>
            <Button component={Link} href="/about" variant="contained">
                Go to About Page
            </Button>
        </div>
    );
}
