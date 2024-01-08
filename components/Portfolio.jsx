import React from "react";
import data from "../data.js";
import PortfolioCard from "./PortfolioCard.jsx";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext.js";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className="portfolio section" id="portfolio">
            <div className="portfolio_title_wrapper title_wrapper">
                <h1 className={`portfolio_title section_title ${theme}`}>
                    Portfolyo
                </h1>
                
                <a
                    href="https://github.com/mustafazorlu"
                    className={`seeAll ${theme}`}
                >
                    Hepsini Gör <GoArrowUpRight />
                </a>
            </div>
            <div className="portfolio_cards grid-wrapper">
                {data.map((item) => (
                    <PortfolioCard item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
