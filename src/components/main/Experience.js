import React from 'react'

import Input from './Input'

function Experience(props){

    return (
        <div id="Experience" className="card Experience to-hide">
            <h2>{props.header}</h2>
            <Input 
                name="Company"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Company || ''}
            />
            <Input 
                name="Address"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Address || ''}
            />
            <Input 
                name="Position"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Position || ''}
            />
            <Input 
                name="Year"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Year || ''}
            />
            <Input 
                name="Tasks"
                type="text"
                handleChange={(e) => props.handleChange(e, props.header)}
                value={props.value.Tasks || ''}
            />

            <span onClick={() => props.handleClick(props.header)} className="add to-hide">+</span>
            <span onClick={() => props.handleUpdate(props.header)} className="update hide">Update</span>
        </div>
    )
}

export default Experience