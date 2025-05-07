import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { MealProvider } from './context/MealContext'
import { FavoriteProvider } from './context/FavoriteContext'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <FavoriteProvider>
                    <MealProvider>
                        <App />
                    </MealProvider>
                </FavoriteProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)
