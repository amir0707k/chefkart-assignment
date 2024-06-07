import React from 'react'
import './style.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import calendarImg from '../../assets/calendar-img.svg'
import clockImg from '../../assets/clock.svg'
import { formatDate } from '../../functions/formatDate';
import { getTimeRange } from '../../functions/getTimeRange';
function Header() {

  const date = new Date();
  const currentDate = formatDate(date)
  const currentTime = getTimeRange()


  return (
    <div>
        <div className='top'></div>
        <div className='bottom'>
            <div className="date-time">
              <div className="date">
                <img src={calendarImg} alt="" />
                <p>{currentDate}</p>
              </div>
              {/* <span>|</span> */}
              <div className="time-header">
                <img src={clockImg} alt="" />
                <p>{currentTime}</p>
              </div>
                {/* <Calendar/> */}
            </div>
            <div  className='dish-type'>
            <ul>
                <li>Italian</li>
                <li>Italian</li>
                <li>Italian</li>
                <li>Italian</li>
            </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Header

// I want to get the time from current to 2 and half later in javascript. This is how it should look like 10:30 Pm-12:30 Pm