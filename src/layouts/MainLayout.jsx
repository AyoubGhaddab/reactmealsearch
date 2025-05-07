import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Header from '../components/Header'

const MainLayout = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div
            className={`min-h-screen ${
                isDarkMode
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900'
            }`}
        >
            <Header />
            {children}
        </div>
    )
}

export default MainLayout
