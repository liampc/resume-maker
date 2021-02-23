import React from 'react'

import Input from './Input'

function Certifications(props){

    return (
        <div id="Certifications" className="card Certifications to-hide">
        <h2>{props.header}</h2>
        <Input 
            name="Certificate"
            type="text"
            handleChange={(e) => props.handleChange(e, props.header)}
            value={props.value.Certificate || ''}
        />

        <span onClick={() => props.handleClick(props.header)} className="add to-hide">+</span>
        <span onClick={() => props.handleUpdate(props.header)} className="update hide">Update</span>
    </div>
    )
    
}

export default Certifications