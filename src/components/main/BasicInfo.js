import React from 'react'

import Input from './Input';

function BasicInfo(props){


    return (
        <div className="card to-hide">
            <h2>{props.header}</h2>
            <Input 
                name="Name"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Basic')}
                value={props.value.Name || ''}
            />
            <Input 
                name="Email"
                type="email"
                handleChange={(e) => props.handleChange(e, 'Basic')}
                value={props.value.Email  || ''}
            />
            <Input 
                name="Phone"
                type="number"
                handleChange={(e) => props.handleChange(e, 'Basic')}
                value={props.value.Phone || ''}
            />
            <Input 
                name="Website"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Basic')}
                value={props.value.Website || ''}
            />
        </div>
    )
}


export default BasicInfo