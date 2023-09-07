import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Femo Library</h1>
            <Link href="/animations"> Animations</Link>
            <Link href="/animations/horizontal-side"></Link>
        </header>
    )
}

export default Header;