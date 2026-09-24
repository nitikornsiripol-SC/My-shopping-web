import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 

import HomePage from './pages/HomePage'
import FoodPage from './pages/FoodPage'
import CartPage from './pages/CartPage'

import { Cartpage } from './context/CartPageContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Cartpage>
      <CartPage />

    </Cartpage>
  )
}

export default App
