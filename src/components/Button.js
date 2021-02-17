import React from 'react'

import './_components.scss'

function Button(props){

    return (
        <button className="button">
                {props.text}
        </button>
    )
}

export default Button