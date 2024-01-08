import React, { useContext } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import ThemeContext from "@/context/ThemeContext";

const Technologies = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className="section technologies">
            <h2 className={`section_title ${theme}`}>Teknolojiler</h2>
            <div className="technologies_wrapper">
                <div className="technologies_row row_1">
                    <div className={`technology_item ${theme}`}>
                        <FaHtml5 /> <span>HTML</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <FaCss3Alt />
                        <span>CSS</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <SiJavascript /> <span>JavaScript</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <FaSass /> <span>SCSS</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <FaBootstrap /> <span>Bootstrap</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <FaReact /> <span>React</span>
                    </div>
                </div>
                <div className="technologies_row row_2">
                    <div className={`technology_item ${theme}`}>
                        <SiTailwindcss /> <span>Tailwind</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <SiNextdotjs /> <span>Next.js </span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <SiPhp /> <span>PHP</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <GrMysql /> <span>MySQL</span>
                    </div>

                    <div className={`technology_item ${theme}`}>
                        <FaNodeJs /> <span>Node.js</span>
                    </div>
                    <div className={`technology_item ${theme}`}>
                        <CgFigma /> <span>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
