import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import styles from "./page.module.css";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StyledComponentsRegistry>
          <section className={styles.section}>{children}</section>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
