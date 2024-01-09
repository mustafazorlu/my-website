"use client";
import "../styles/style.scss";

import { ThemeContextProvider } from "@/context/ThemeContext";
import { useState } from "react";
import { useEffect } from "react";
import Main from "./main";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    return (
        <>
            {loading ? (
                <div className="loading">
                    <div className="loader">
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                    </div>
                </div>
            ) : (
                <ThemeContextProvider>
                    <Main />
                </ThemeContextProvider>
            )}
        </>
    );
}
