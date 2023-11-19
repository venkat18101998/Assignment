"use client"
import React, { createContext, useState, useContext } from 'react';


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleTheme = () => {
        setIsHighContrast((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isHighContrast, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
