import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">Meal Search</h1>
            <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

export default Header
