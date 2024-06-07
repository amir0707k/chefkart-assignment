import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import { DishesProvider } from './dishesContext/DishesProvider'

function App() {


  return (
    <>
      <DishesProvider>
        <MainPage />
      </DishesProvider>
    </>
  )
}

export default App
