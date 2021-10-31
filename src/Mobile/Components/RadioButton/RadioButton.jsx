import React from 'react'
import './RadioButton.scss'
const RadioButton = ({on,seton}) => {
    return (
        <div  onClick={()=>seton(!on)} className={`radio-button ${on?'active':'deactive'}`}>
            <div className="dot">

            </div>
        </div>
    )
}

export default RadioButton
