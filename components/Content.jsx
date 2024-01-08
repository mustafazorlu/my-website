import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
const Content = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className="content" id="content">
            <div className={`about_me ${theme}`}>
                <h1 className="about_me_title">
                    Ben <span className="name">Mustafa Zorlu.</span>
                    <br></br>
                    Full-stack yazılımcı olmaya çalışıyorum. İyi forumlar 😁
                </h1>
                <div className={`about_me_articles ${theme}`}>
                    <p className="article">
                        Portfolio sayfama hoşgeldin seni burada görmek beni çok
                        mutlu etti 🥰
                    </p>
                    <p className="article">
                        <b>
                            Tokat Gaziosmanpaşa Üniversitesi Bilgisayar
                            Mühendisliği
                        </b>{" "}
                        bölümünde son sınıf öğrencisiyim. Okulumun - herhangi bir
                        okul için de geçerli - bana diploma denilen kağıttan
                        başka bir şey veremediğini farkettiğim anda internetteki
                        eğitimleri izleyerek <u>yazılımın</u> üstüne düşmeye
                        başladım.Hala da internetteki eğitimlerle kendimi
                        geliştiriyorum.Şuan da Junior seviyesindeyim herhalde 😀
                    </p>
                    <p className="article">
                        Bi süredir Freelance sektöründe işler alarak kendimi
                        daha da geliştirmeye çalışıyorum ve yeni tecrübeler
                        ediniyorum.
                    </p>
                    <p className="article">
                        Bunların dışında <b>TEKNOFEST</b>'de <b>HUMA</b>{" "}
                        takımında <b>Sürü İHA</b> kategorisinde çalışmalar
                        yürüttüm. Burdan gelişimimde bana yardımcı olan takım
                        arkadaşlarıma teşekkür ediyorum.
                    </p>
                    <p className="article">
                        Eğer sen de benim gibi çalışmayı seven ve hayallerini
                        gerçekleştirmeye çalışan biriysen, ya da bir takım
                        arkadaşına ihtiyacın varsa benimle iletişime
                        geçebilirsin.
                    </p>
                </div>
            </div>
            <div className="photo_social">
                <div className="photo">
                    <img src="/ben.jpg" alt="" />
                </div>

                <div className="social">
                    <div className="social_media_links">
                        <figure>
                            <Link
                                className={`link ${theme}`}
                                href={"https://github.com/mustafazorlu"}
                            >
                                <FaGithub className="icon" />{" "}
                                <span>Follow on Github</span>
                            </Link>
                        </figure>
                        <figure>
                            <Link
                                className={`link ${theme}`}
                                href={
                                    "https://www.instagram.com/rikkagami_ss/?hl=tr"
                                }
                            >
                                <FaInstagram className="icon" />{" "}
                                <span>Follow on Instagram</span>
                            </Link>
                        </figure>
                        <figure>
                            <Link
                                className={`link ${theme}`}
                                href={
                                    "https://www.linkedin.com/in/mustafa-zorlu/"
                                }
                            >
                                <FaLinkedin className="icon" />{" "}
                                <span>Follow on Linkedin</span>
                            </Link>
                        </figure>
                        <figure className="mail">
                            <figure>
                                <Link
                                    className={`link ${theme}`}
                                    href={"mailto:mzorlu3579@gmail.com"}
                                >
                                    <IoMail className="icon" />{" "}
                                    <span>mzorlu3579@gmail.com</span>
                                </Link>
                            </figure>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
