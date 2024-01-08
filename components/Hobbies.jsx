import React from "react";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const Hobbies = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className="section hobbies" id="hobbies">
            <div className="title_wrapper">
                <h2 className={`section_title ${theme}`}>Hobilerim</h2>
                <div className="masonry">
                    <div className="grid">
                        <img src="/eren.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="./akrep.jpg" alt="" />
                    </div>

                    <div className="grid">
                        <img src="/kopek.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="kedi.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="/civcivler.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="/kaktus.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="cocuk.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="miku.jpg" alt="" />
                    </div>

                    <div className="grid">
                        <img src="pika.jpg" alt="" />
                    </div>

                    <div className="grid">
                        <img src="tavsan.jpg" alt="" />
                    </div>
                    <div className="grid">
                        <img src="vazodacicek.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
