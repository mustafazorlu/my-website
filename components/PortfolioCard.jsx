import React from "react";

const PortfolioCard = ({ item }) => {
    return (
        <a href={item.url}>
            <div className="card">
                <div className="card_image">
                    <img src={item.image} alt="" />
                </div>
                <div className="card_information">
                    <h4 className="title">{item.title}</h4>
                    <p className="card_desc">{item.desc}</p>
                </div>
            </div>
        </a>
    );
};

export default PortfolioCard;
