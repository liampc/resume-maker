import React, {useState} from 'react';
import uniqid from 'uniqid';

import Input from './Input'

function Card(props){

    const [list, setList] = useState(props.inputs)

    
    let display = list.map(item => {
        return <Input name={item.name} type={item.type} key={uniqid()} />
    })

    function handleClick(){
        setList(prevState => prevState.concat(props.inputs))
    }


    return (
        <section className="card" id={props.header}>
            <h2>{props.header}</h2>
            {display}
            <span onClick={handleClick}>+</span>
        </section>
    )
}

export default Card