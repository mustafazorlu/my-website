"use client";
import "../styles/style.scss";

import { ThemeContextProvider } from "@/context/ThemeContext";

import Main from "./main";

export default function Home() {
    return (
        <ThemeContextProvider>
            <Main />
        </ThemeContextProvider>
    );
}
