import React from 'react'
import star from '../../assets/star.svg'
import './style.css'
import timer from '../../assets/timer.svg'
import veggies from '../../assets/veggies.png'
import bowl from '../../assets/bowl.png'
import Refrigerator2 from '../../assets/Refrigerator 2.png'
import back from '../../assets/left-arrow.svg'

function Ingredients({ currentDish, description, setCurrentDish }) {
  const backHandler = () => {
    setCurrentDish("")
  }
  console.log(Refrigerator2);
  return (
    <div className="parent">
      <div className="topContainer">
        <img src={back} alt="" onClick={backHandler} className='back' />
        <div className="backbox"></div>
        <div className="vegies"><img src={veggies} alt="" />
          <img src={bowl} alt="" className='bowl' />
        </div>
        <div id="textSection">
          <h2 className="title">{currentDish} <span id="rating">4.2 ★</span></h2>
          <p id="description">{description}</p>
        </div>
        <div className="time"><img src={timer} alt="" />1 hour</div>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <span>For 2 people</span>
      </div>

      <div className="vegetables">
        <h3>Vegetables (05) </h3>
        <ul className="list">
          <li><p>Cauliflower</p><span>01 Pc</span></li>
          <li><p>Tomato</p><span>10 Pc</span></li>
          <li><p>Spinach</p><span>1/2 Kg</span></li>
        </ul>
      </div>

      <div className="spices">
        <h3>Spices (10) <img src="./utilites/down.png" alt="" /></h3>
        <ul className="list">
          <li><p>Coriander</p><span>100gram</span></li>
          <li><p>Mustard oil</p><span>1/2 litres</span></li>
        </ul>
      </div>

      <div className="appliances">
        <h3>Appliances</h3>
        <div className="freezers">
          <div className="innerdiv"><img src={Refrigerator2} alt="" /><span>Refrigerator</span></div>
          <div className="innerdiv"><img src={Refrigerator2} alt="" /><span>Refrigerator</span></div>
          <div className="innerdiv"><img src={Refrigerator2} alt="" /><span>Refrigerator</span></div>

        </div>
      </div>
    </div>
  )
}

export default Ingredients
