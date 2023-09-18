import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Layout from "../layout";

export default function Animations() {
  return (
    <Layout>
      <Link href={"/animations/horizontal-side"}>Horizontal Side</Link>
      <Link href={"/animations/stacking-cards"}>Stacking Cards</Link>
    </Layout>
  );
}
