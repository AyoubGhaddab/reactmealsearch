import React, { useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import MealList from '../components/MealList'
import { FavoriteContext } from '../context/FavoriteContext'
import { Link } from 'react-router-dom'

const Favorites = () => {
    const { favorites } = useContext(FavoriteContext)

    return (
        <MainLayout>
            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-gray-500 text-lg">Aucun favori pour le moment.</p>
                    <Link
                        to="/"
                        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                    >
                        Aller à l'accueil
                    </Link>
                </div>
            ) : (
                <MealList meals={favorites} />
            )}
        </MainLayout>
    )
}

export default Favorites
