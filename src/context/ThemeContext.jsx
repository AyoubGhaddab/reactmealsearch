import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve the theme from localStorage or default to false
        const savedTheme = localStorage.getItem('isDarkMode')
        return savedTheme ? JSON.parse(savedTheme) : true
    })

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode
            localStorage.setItem('isDarkMode', JSON.stringify(newMode)) // Save to localStorage
            return newMode
        })
    }

    useEffect(() => {
        // Sync the theme with localStorage on initial load
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
