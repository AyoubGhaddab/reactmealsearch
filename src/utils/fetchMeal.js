const fetchMeal = async (mealId) => {
    const response = await fetch(
         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    )
    const data = await response.json()
    return data.meals[0]
}
