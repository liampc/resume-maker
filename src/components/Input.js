import React from 'react'

function Input(props){

    return(
        <div>
            <label>
                {props.name}
            </label>
            <input type={props.type} name={props.name} />
        </div>
    )
}

export default Input