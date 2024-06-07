import React, { useState } from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import PopularDishes from '../PopularDishes'
import Menu from '../Menu'
import Ingredients from '../Ingredients'

function MainPage() {

  const [currentDish, setCurrentDish] = useState("")
  const [description, setDescription] = useState("")

  return (
    <>
      
      {!currentDish ? <> 
        <Navbar />
        <Header />
        <PopularDishes />
        <Menu setDescription={setDescription} setCurrentDish={setCurrentDish} /> </> : <Ingredients setCurrentDish={setCurrentDish} currentDish={currentDish}  description={description} />}

    </>
  )
}

export default MainPage