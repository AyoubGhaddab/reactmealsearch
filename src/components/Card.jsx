import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const MAXLENGTH = 200

const Card = ({ meal }) => {
    const { isDarkMode } = useContext(ThemeContext)
    const truncatedDescription =
        meal.strInstructions.length > MAXLENGTH
            ? meal.strInstructions.substring(0, MAXLENGTH) + '...'
            : meal.strInstructions

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
            <img className="w-full" src={meal.strMealThumb} alt="Meal" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
                <p className="text-base">{truncatedDescription}</p>
            </div>
        </div>
    )
}

export default Card
