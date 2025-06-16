import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { ThemeContext } from '../context/ThemeContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const Meal = () => {
    const { mealId } = useParams()
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const { isDarkMode } = useContext(ThemeContext)

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/lookup.php?i=${mealId}`
                )
                const data = await response.json()
                setMeal(data.meals[0])
            } catch (err) {
                setError(
                    'Échec du chargement des détails du repas. Veuillez réessayer plus tard.'
                )
            } finally {
                setLoading(false)
            }
        }
        fetchMeal()
    }, [mealId])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Chargement...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        )
    }

    if (!meal) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Repas introuvable.</p>
            </div>
        )
    }

    const ingredients = Array.from({ length: 20 }, (_, i) => ({
        ingredient: meal[`strIngredient${i + 1}`],
        measure: meal[`strMeasure${i + 1}`],
    })).filter((item) => item.ingredient)

    return (
        <MainLayout>
            <div
                className={`min-h-screen ${
                    isDarkMode
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-900'
                }`}
            >
                <div
                    className={`w-full rounded-lg shadow-lg p-6 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                >
                    <div
                        className="w-full h-64 mb-4 rounded-lg bg-contain bg-center"
                        style={{ backgroundImage: `url(${meal.strMealThumb})` }}
                    ></div>
                    <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
                    <p className="mb-4">{meal.strInstructions}</p>
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4"
                    >
                        Voir sur YouTube
                    </a>
                    <h2 className="text-2xl font-bold mb-2">Ingrédients</h2>
                    <ul className="list-disc list-inside">
                        {ingredients.map((item, index) => (
                            <li key={index}>
                                {item.ingredient} - {item.measure}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    )
}

export default Meal
