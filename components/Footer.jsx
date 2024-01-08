import React from "react";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import Link from "next/link";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`footer ${theme}`}>
            <div className="footer_nav">
                <Link className="link" href="#content">
                    Hakkımda
                </Link>
                <Link className="link" href="#portfolio">
                    Portolyo
                </Link>
                <Link className="link" href="#hobbies">
                    Hobilerim
                </Link>
            </div>
            <div className="top_wrapper">
                <a href="#main" className="top">Başa dön</a>
            </div>

            <div className="footer_author">
                <span className="author">© {new Date().getFullYear()} Mustafa Zorlu</span>
            </div>
        </div>
    );
};

export default Footer;
