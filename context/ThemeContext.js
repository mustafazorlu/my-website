"use client";

import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("");

    const toggleTheme = () => {
        setTheme((theme) => (theme === "" ? "light" : ""));
    };

    const values = {
        theme,
        setTheme,
        toggleTheme
    };
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
