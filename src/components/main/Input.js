import React from 'react'


function Input(props){

    return(
        <div className="input">
            <label htmlFor={props.name}> {props.name}: </label>
                <input 
                    className="input__box"
                    name={props.name}
                    type={props.type}  
                    onChange={props.handleChange}
                    value={props.value}
                />
        </div>
    )
}

export default Input