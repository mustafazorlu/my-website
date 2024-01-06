import React from "react";
import Link from "next/link";
import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">mz</div>
            <nav className="header_navigation">
                <Link className="link" href="/aboutme">
                    Hakkımda
                </Link>
                <Link className="link" href="/portfolio">
                    Portolio
                </Link>
                <Link className="link" href="/blog">
                    Blog
                </Link>
            </nav>
            <div className="theme_button">
                <RiMoonClearLine className="moon_icon" />
            </div>
        </header>
    );
};

export default Header;
