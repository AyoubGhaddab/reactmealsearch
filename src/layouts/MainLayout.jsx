import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div
            className={
                isDarkMode
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900'
            }
        >
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
