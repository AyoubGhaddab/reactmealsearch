import React from 'react'
import Card from './Card'

const MealList = ({ meals }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {meals.map((meal) => (
                <Card key={meal.idMeal} meal={meal} />
            ))}
        </div>
    )
}

export default MealList
