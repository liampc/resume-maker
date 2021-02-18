import React from 'react'

import Input from './Input';

function BasicInfo(props){


    return (
        <div className="card">
            <h2>Basic Info</h2>
            <Input 
                name="Name"
                type="text"
                handleChange={props.handleChange}
                value={props.value.Name}
            />
            <Input 
                name="Email"
                type="email"
                handleChange={props.handleChange}
                value={props.value.Email}
            />
            <Input 
                name="Phone"
                type="number"
                handleChange={props.handleChange}
                value={props.value.Phone}
            />
            <Input 
                name="Website"
                type="text"
                handleChange={props.handleChange}
                value={props.value.Website}
            />
            <span onClick={props.handleClick}>+</span>
        </div>
    )
}


export default BasicInfo