import React from 'react'
import './style.css'
function Equipment({ equipment }) {

    let src = '../../assets/Refrigerator 2.png'

    console.log(src, equipment);
    return (
        <div className='equipment'>
            <img className='equipment-img' src={src} alt={`${equipment}`} />

            <div className='equipment-title'>
                {equipment}
            </div>
        </div>
    )
}

export default Equipment