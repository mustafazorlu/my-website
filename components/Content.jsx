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
                    Selamlar! Ben <br />{" "}
                    <span className="name">Mustafa Zorlu.</span>
                    <br />
                    Full-stack yazılımcı olma hayalimde adım adım ilerliyorum.
                </h1>
                <div className={`about_me_articles ${theme}`}>
                    <p className="article">
                        Portfolyo sayfama hoşgeldin seni burada görmek beni çok
                        mutlu etti.
                    </p>
                    <p className="article">
                        <b>
                            Tokat Gaziosmanpaşa Üniversitesi Bilgisayar
                            Mühendisliği
                        </b>{" "}
                        bölümünde son sınıf öğrencisiyim. 4 yıldır web
                        teknolojileri alanındaki yetkinliğimi çeşitli
                        eğitimlerle geliştiriyorum. Aynı zamanda UI ve UX
                        tasarımlarıyla da ilgileniyorum. Şuan da Jr. Front-End
                        geliştirici olarak çalışmalarımı sürdürmekteyim.
                    </p>
                    <p className="article">
                        Bir süredir Freelance işler alarak yeni tecrübeler
                        edinip, kendimi geliştiriyorum.
                    </p>
                    <p className="article">
                        Bunların dışında <b>Unity</b>'de oyun geliştirme ve{" "}
                        <b>TEKNOFEST</b> <b>HUMA</b> takımında <b>Sürü İHA</b>{" "}
                        kategorisinde çalışmalar yürüttüm. Yarışmada 6. olarak{" "}
                        <b>En İyi Takım Ruhu</b> ödülüne layık görüldük. Burdan
                        gelişimimde bana yardımcı olan takım arkadaşlarıma
                        teşekkür ediyorum.
                    </p>
                    <p className="article">
                        Eğer sen de hayallerini gerçekleştirmeye çalışan
                        biriysen ve bir takım arkadaşına ihtiyacın varsa benimle
                        iletişime geçebilirsin.
                    </p>
                    <p>
                        Discord: <b>zeytinsiyahi</b>
                    </p>
                    <p>
                        Telefon: <b>05070086002</b>
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
                            <Link
                                className={`link ${theme}`}
                                href={"mailto:mzorlu3579@gmail.com"}
                            >
                                <IoMail className="icon" />{" "}
                                <span>mzorlu3579@gmail.com</span>
                            </Link>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
