import React from 'react'

import '../../styles/_components.scss'

function Link(props){


    return (
        <a className="link" href={`#${props.link}`}>
            {props.link}
        </a>
    )
}

export default Link