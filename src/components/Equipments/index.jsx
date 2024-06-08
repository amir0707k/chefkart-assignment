import React from 'react'
import './style.css'
function Equipment({ equipment }) {

    let src = `../../assets/${equipment}.svg`
    
    if(equipment === 'Refrigerator'){
        src = `../../assets/Refrigerator.svg`
    }else{
        src = `../../assets/Microwave.svg`
    }

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