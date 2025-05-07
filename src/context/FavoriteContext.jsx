import React, { createContext, useState, useEffect } from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem('favorites')) || []
        setFavorites(storedFavorites)
    }, [])

    const addFavorite = (meal) => {
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }

    const removeFavorite = (mealId) => {
        const updatedFavorites = favorites.filter(
            (fav) => fav.idMeal !== mealId
        )
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }

    const isFavorite = (mealId) => {
        return favorites.some((fav) => fav.idMeal === mealId)
    }

    return (
        <FavoriteContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    )
}
