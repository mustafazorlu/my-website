
import Header from "@/components/Header";
import "../styles/style.scss";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Hobbies from "@/components/Hobbies";
import Technologies from "@/components/Technologies";

export default function Home() {
    return (
        <main className="main">
            <div className="container">
                <Header/>
                <Content/>
                <Technologies/>
                <Portfolio/>
                <Hobbies/>
                <Footer/>
            </div>
        </main>
    );
}
