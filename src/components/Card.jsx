import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { FavoriteContext } from '../context/FavoriteContext'

const MAXLENGTH = 200

const Card = ({ meal }) => {
    const { isDarkMode } = useContext(ThemeContext)
    const { addFavorite, removeFavorite, isFavorite } =
        useContext(FavoriteContext)
    const navigate = useNavigate()

    const handleFavoriteToggle = () => {
        if (isFavorite(meal.idMeal)) {
            removeFavorite(meal.idMeal)
        } else {
            addFavorite(meal)
        }
    }

    const truncatedDescription =
        meal.strInstructions.length > MAXLENGTH
            ? meal.strInstructions.substring(0, MAXLENGTH) + '...'
            : meal.strInstructions

    const handleClick = () => {
        console.log('Meal ID:', meal.idMeal)
        navigate(`/meals/${meal.idMeal}`)
    }

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
        >
            <img
                onClick={handleClick}
                className="w-full"
                src={meal.strMealThumb}
                alt="Meal"
            />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
                    <button
                        onClick={handleFavoriteToggle}
                        className={`text-2xl ${
                            isFavorite(meal.idMeal)
                                ? 'text-red-500'
                                : 'text-gray-400'
                        }`}
                    >
                        {isFavorite(meal.idMeal) ? '❤️' : '🤍'}
                    </button>
                </div>
                <p className="text-base">{truncatedDescription}</p>
            </div>
        </div>
    )
}

export default Card
