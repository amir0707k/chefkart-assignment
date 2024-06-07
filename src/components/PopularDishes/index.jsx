import React, { useContext } from 'react'
import './style.css'
import { DishesContext } from '../../dishesContext/DishesContext'
function PopularDishes() {
  const {popularDishes} = useContext(DishesContext);
  console.log(popularDishes);

  return (
    <div className='popular-dishes'>
      <h3>
        Popular Dishes
      </h3>
      <div>
        <ul>
         {
          popularDishes.map((popularDish) => {
              return <li key={popularDish.id}>
              <img src={popularDish.image}/>
              <span className='dish-name'>
                {popularDish.name}
              </span>
            </li>
          })
         }
          
        </ul>
      </div>
    </div>
  )
}

export default PopularDishes