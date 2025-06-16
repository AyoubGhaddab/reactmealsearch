import React, { useContext, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import { MealContext } from '../context/MealContext'

const Home = () => {
    const { meals, loading, error, heading, searchMeals, fetchRandomMeals } =
        useContext(MealContext)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (query) => {
        searchMeals(query)
    }
    const handleLucky = () => {
        // Implement the logic for "I am Feeling Lucky" button
        console.log('I am Feeling Lucky clicked')
        fetchRandomMeals()
    }

    return (
        <MainLayout>
            <div className="m-4 flex flex-col items-center justify-center mt-3">
                <p className="mb-4 text-xl text-gray-600">
                    Accédez à de nouvelles recettes instantanément : cliquez sur &apos;J&apos;ai de la chance&apos;, ou affinez votre recherche par ingrédient
                </p>
                <div className="w-full flex items-center justify-center">
                    <SearchForm
                        onSearch={handleSearch}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleLucky={handleLucky}
                    />
                </div>
            </div>
            {error && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
            {loading && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-gray-500">Chargement...</p>
                </div>
            )}
            {!loading && meals.length === 0 && !error && (
                <div className="flex items-center justify-center mt-4 mb-4">
                    <p className="text-gray-500">Aucun repas trouvé</p>
                </div>
            )}
            {!loading && meals.length > 0 && (
                <>
                    <h2 className="ml-4 text-2xl font-bold mt-4 mb-4">
                        {heading}
                    </h2>
                    <MealList meals={meals} />
                </>
            )}
        </MainLayout>
    )
}

export default Home
