import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'
import MainLayout from './layouts/MainLayout'
import SearchForm from './components/SearchForm'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('') // State to store error messages
    const [heading, setHeading] = useState('Random Meals')

    const fetchRandomMeals = async () => {
        setLoading(true)
        setError('') // Clear any previous errors
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
            const randomMeals = await Promise.all(
                Array.from({ length: 8 }).map(async () => {
                    const response = await fetch(url)
                    const data = await response.json()
                    return data.meals[0]
                })
            )
            setMeals(randomMeals)
        } catch (error) {
            console.error('Error fetching random meals:', error)
            setError('Failed to fetch random meals. Please try again later.')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchRandomMeals()
    }, [])

    const handleSearch = (query) => {
        console.log('Search query:', query)
        setError('') // Clear any previous errors
        setHeading(`Search results for "${query}"`)
        setLoading(true)
        if (query.trim() === '') return
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.trim()}`
        try {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Search results:', data)
                    setMeals(data.meals || [])
                    if (!data.meals) {
                        setError('No meals found for the search query.')
                    }
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error)
                    setError(
                        'Failed to fetch search results. Please try again later.'
                    )
                })
        } catch (error) {
            console.error('Error fetching search results:', error)
            setError('Failed to fetch search results. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <MainLayout>
            <div className="flex items-center justify-center mt-3 ">
                <SearchForm
                    onSearch={handleSearch}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>
            {error && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
            {loading && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-gray-500">Loading...</p>
                </div>
            )}
            {!loading && meals.length === 0 && !error && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-gray-500">No meals found</p>
                </div>
            )}
            {!loading && meals.length > 0 && (
                <>
                    <h2 className="ml-4 text-2xl font-bold mt-4 mb-4">
                        {heading}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                        {meals.map((meal) => (
                            <Card key={meal.idMeal} meal={meal} />
                        ))}
                    </div>
                </>
            )}
        </MainLayout>
    )
}

export default App
