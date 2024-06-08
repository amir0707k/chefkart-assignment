import React from 'react'
import './style.css'
function Equipment({ equipment }) {
    let src = `../../assets/${equipment}.svg`
    // console.log(typeof Ref);
    // let srrc = `../../assets/Refrigerator.svg`
    // console.log(src);
    // let source=  `../../assets/Refrigerator.svg`
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