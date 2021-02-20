import React from 'react'

import Input from './Input'

function Education (props){

    return (
        <div className="card">
            <h2>{props.header}</h2>
            <Input 
                name="School"
                type="text"
                handleChange={props.handleChange}
                value={props.value.School || ''}
            />
            <Input 
                name="Course"
                type="text"
                handleChange={props.handleChange}
                value={props.value.Course || ''}
            />
            <Input 
                name="Year"
                type="Date"
                handleChange={props.handleChange}
                value={props.value.Year || ''}
            />

            <span onClick={() => props.handleClick(props.header)}>+</span>
        </div>
    )
}

export default Education