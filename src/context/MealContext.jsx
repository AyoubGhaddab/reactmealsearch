import React, { createContext, useState, useEffect } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const MealContext = createContext()

export const MealProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [heading, setHeading] = useState('Repas aléatoires')

    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('meals'))
        const lastQuery = localStorage.getItem('lastQuery')

        if (savedMeals && savedMeals.length > 0) {
            setMeals(savedMeals)
            setHeading(
                lastQuery ? `Résultats de la recherche pour "${lastQuery}"` : 'Repas sauvegardés'
            )
        } else {
            fetchRandomMeals()
        }
    }, [])

    const fetchRandomMeals = async () => {
        setLoading(true)
        setError('')
        try {
            const url = `${API_BASE_URL}/random.php`
            const randomMeals = await Promise.all(
                Array.from({ length: 8 }).map(async () => {
                    const response = await fetch(url)
                    const data = await response.json()
                    return data.meals[0]
                })
            )
            setMeals(randomMeals)
            localStorage.setItem('meals', JSON.stringify(randomMeals))
            localStorage.setItem('lastQuery', '')
        } catch (error) {
            console.error('Error fetching random meals:', error)
            setError('Échec de la récupération des repas aléatoires. Veuillez réessayer plus tard.')
        } finally {
            setLoading(false)
        }
    }

    const searchMeals = (query) => {
        if (query.trim() === '') return
        setError('')
        setHeading(`Résultats de la recherche pour "${query}"`)
        setLoading(true)
        setMeals([])

        const url = `${API_BASE_URL}/search.php?s=${query.trim()}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.meals || [])
                if (!data.meals) {
                    setError('Aucun repas trouvé pour la recherche.')
                }
                localStorage.setItem('meals', JSON.stringify(data.meals || []))
                localStorage.setItem('lastQuery', query)
            })
            .catch((error) => {
                console.error('Error fetching search results:', error)
                setError(
                    'Échec de la récupération des résultats de recherche. Veuillez réessayer plus tard.'
                )
            })
            .finally(() => setLoading(false))
    }

    return (
        <MealContext.Provider
            value={{
                meals,
                loading,
                error,
                heading,
                searchMeals,
                fetchRandomMeals,
            }}
        >
            {children}
        </MealContext.Provider>
    )
}
