import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { FaAngleDown } from "react-icons/fa6";
import { LuCornerRightDown } from "react-icons/lu";
import { FaSortDown } from "react-icons/fa";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [show, setShow] = useState(false);
    useEffect(() => {
        console.log(theme);
    }, [theme]);
    return (
        <header className="header">
            <div className={`logo ${theme}`}>mz.</div>
            <nav className={`header_navigation ${theme} ${show ? "show" : ""}`}>
                <Link className="link" href="#content">
                    Hakkımda
                </Link>
                <Link className="link" href="#portfolio">
                    Portolyo
                </Link>
                <Link className="link" href="#hobbies">
                    Hobilerim
                </Link>
            </nav>
            <div className={`hamburger ${theme}`} onClick={() => setShow(!show)}>
                Menu <FaSortDown />
            </div>
            <div onClick={toggleTheme} className={`theme_button ${theme}`}>
                {theme === "" ? (
                    <RiMoonClearLine className="theme_icon" />
                ) : (
                    <BsSun className="theme_icon" />
                )}
            </div>
        </header>
    );
};

export default Header;
