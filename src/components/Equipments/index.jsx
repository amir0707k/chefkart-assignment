import React from 'react'
import Refrigerator from '../../assets/Refrigerator.svg'
import './style.css'
function Equipment({ equipment }) {


    return (
        <div className='equipment'>
            <img className='equipment-img' src={Refrigerator} alt={`${equipment}`} />

            <div className='equipment-title'>
                {equipment}
            </div>
        </div>
    )
}

export default Equipment