import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


const Card = () => {
    const { isDarkMode } = useContext(ThemeContext);

  return (
  <div className={`max-w-sm rounded overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <img
      className="w-full"
      src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      alt="Meal"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Delicious Meal</div>
      <p className="text-base">
        This is a short description of the meal. It's tasty, healthy, and easy to prepare.
      </p>
    </div>
  </div>
  )
}

export default Card