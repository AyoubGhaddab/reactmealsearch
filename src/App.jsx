import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Header from './Header'
import Card from './components/Card'
import './App.css'

function App() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div
      className={
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }
    >
      <Header />
      <div className='flex justify-center items-center min-h-screen gap-5'>
           <Card />
         <Card />
      </div>
    </div>
  ) 
}

export default App
