import React, { useContext } from 'react'
import './style.css'
import Equipment from '../Equipments';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import star from '../../assets/star.svg'
import veg from '../../assets/veg.svg'
import { DishesContext } from '../../dishesContext/DishesContext';


function Menu({setDescription, setCurrentDish}) {
  const arr = ['Refrigerator', 'Microwave']

  const {dishes} = useContext(DishesContext)
  
  const viewListClickHandler = (dish) => {
    setDescription(dish.description)
    setCurrentDish(dish.name)
  }

  console.log(dishes)
  return (
    <div className='menu'>
      <div className='options'>
        <select>
          <option>
            Recommended
          </option>
          <option>
            New
          </option>
          <option>
            Most viewed
          </option>
        </select>
        <button>Menu</button>
      </div>
      <div className='all-cards'>
      <div className="cards-container">
        {dishes.map((dish) => {
          return  <div className="card" key={dish.id}>
          <div className='info'>
            <div className='dish'>
              <p className='title-name'>{dish.name}</p>
              <img src={veg} alt="" />
              <p className='rating'>{dish.rating}<img src={star} /></p>
            </div>
            <div className="ingredients-equipments">
              <div className='equipments'>
                {dish.equipments.map((equipment) => {
                  return <Equipment key={crypto.randomUUID()} equipment={equipment} />
                })}
              </div>
              <div className='ingredients-name'>
                <p>Ingredients</p>
                <p className='list-icon' onClick={() => {
                  viewListClickHandler(dish)
                }}>View List <ArrowForwardIosRoundedIcon  sx={{ fontSize: 12 }} /></p>
              </div>
            </div>
            <div className="description-box">
              <p>{dish.description}</p>
            </div>
          </div>


          <div className='dish-image-add'>
            <img src={dish.image} alt="" className='dish-image'/>

            <button >Add <sup>+</sup></button>
          </div>
          
        </div>
        })}
       
        </div>
      </div>
    </div>
  )
}

export default Menu