import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Card = ({ image, title = 'Unkonw meal', description }) => {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
            <img className="w-full" src={image} alt="Meal" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-base">{description}</p>
            </div>
        </div>
    )
}

export default Card
