import React from 'react'

import Input from './Input'

function Education (props){

    return (
        <div className="card">
            <h2>{props.header}</h2>
            <Input 
                name="School"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.School || ''}
            />
            <Input 
                name="Course"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Course || ''}
            />
            <Input 
                name="Year"
                type="Date"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Year || ''}
            />

            <span onClick={() => props.handleClick(props.header)}>+</span>
            <span onClick={() => props.handleUpdate(props.header)} className="update hide">Update</span>
        </div>
    )
}

export default Education