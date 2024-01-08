import React from "react";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Hobbies from "@/components/Hobbies";
import Technologies from "@/components/Technologies";
const main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className={`main ${theme}`} id="main">
            <div className={`container ${theme}`}>
                <Header />
                <Content />
                <Technologies />
                <Portfolio />
                <Hobbies />
                <Footer />
            </div>
        </main>
    );
};

export default main;
