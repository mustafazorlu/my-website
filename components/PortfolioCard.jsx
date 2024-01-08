import React, { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

const PortfolioCard = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <a href={item.url}>
            <div className={`card ${theme}`}>
                <div className="card_image">
                    <img src={item.image} alt="" />
                </div>
                <div className={`card_information ${theme}`}>
                    <h4 className={`title ${theme}`}>{item.title}</h4>
                    <p className={`card_desc ${theme}`}>{item.desc}</p>
                </div>
            </div>
        </a>
    );
};

export default PortfolioCard;
