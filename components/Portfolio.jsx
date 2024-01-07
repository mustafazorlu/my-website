import React from "react";
import data from "../data.js";
import PortfolioCard from "./PortfolioCard.jsx";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="portfolio_title_wrapper title_wrapper">
                <h1 className="portfolio_title section_title">Portfolyo</h1>
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
