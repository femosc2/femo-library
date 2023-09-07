import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Animations() {
    return (
        <main className={styles.main}>
            <Link href={"/animations/horizontal-side"}>Horizontal Side</Link>
            <Link href={"/animations/stacking-cards"}>Stacking Cards</Link>
        </main>
    )
}