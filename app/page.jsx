
import Header from "@/components/Header";
import "../styles/style.scss";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="main">
            <div className="container">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </main>
    );
}
