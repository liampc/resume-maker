import React from 'react'

import Input from './Input'

function Card(props){

    let inputs = props.inputs.map(item => {
        return <Input name={item.name} type={item.type} key={item.name} />
    })

    return (
        <section className="card" id={props.header}>
            <h2>{props.header}</h2>
            {inputs}
        </section>
    )
}

export default Card