import React from 'react'

import "./_components.scss"

function Input(props){

    return(
        <div className="input">
            <label className="input__label">
                {props.name}: 
            </label>
            <input 
                className="input__box"
                type={props.type} 
                name={props.name} 
                
            />
        </div>
    )
}

export default Input