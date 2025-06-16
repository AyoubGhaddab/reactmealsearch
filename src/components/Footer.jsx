import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <footer
            className={`p-4 text-center ${
                isDarkMode
                    ? 'bg-gray-800 text-gray-200'
                    : 'bg-gray-200 text-gray-700'
            }`}
        >
            <div>
                <span>
                    &copy; 2025 Mohamed Ayoub Ghaddab | Version 0.3 |{' '}
                    <a
                        href="https://github.com/AyoubGhaddab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        GitHub
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
