import React from 'react'
import Home from './views/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Ingredients from './components/Ingredients'
import Meal from './components/Meal'
import Favorites from './views/Favorites'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/meals/:mealId" element={<Meal />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    )
}

export default App
