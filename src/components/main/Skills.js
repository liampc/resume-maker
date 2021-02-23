import React from 'react'

import Input from './Input'

function Skills(props){

    return (
        <div id="Skills" className="card Skills to-hide">
        <h2>{props.header}</h2>
        <Input 
            name="Skill"
            type="text"
            handleChange={(e) => props.handleChange(e, props.header)}
            value={props.value.Skill || ''}
        />

        <span onClick={() => props.handleClick(props.header)} className="add to-hide">+</span>
        <span onClick={() => props.handleUpdate(props.header)} className="update hide">Update</span>
    </div>
    )
    
}

export default Skills