import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <header
            className={`p-4 shadow-md flex justify-between items-center ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
            }`}
        >
            <Link to="/" className="text-xl font-bold">
                🍏 Recherche de repas
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/favorites" className="text-lg">
                    Favoris
                </Link>
                <button
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded ${
                        isDarkMode
                            ? 'bg-gray-700 text-white'
                            : 'bg-gray-200 text-gray-900'
                    }`}
                >
                    {isDarkMode ? 'Mode clair' : 'Mode sombre'}
                </button>
            </div>
        </header>
    )
}

export default Header
