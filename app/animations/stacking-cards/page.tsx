import Image from 'next/image'
import styles from '../../page.module.css'
import Layout from '@/app/layout'

export default function Page() {
    return (
        <main className={styles.main}>
            <Layout>
                Stacking cards
            </Layout>
        </main>
    )
}
