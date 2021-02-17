import React from 'react'

import './_components.scss'

function Link(props){


    return (
        <a className="link" href="#">
            {props.link}
        </a>
    )
}

export default Link