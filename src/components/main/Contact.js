import React from 'react'

import Input from './Input';

function Contact(props){


    return (
        <div id="Contact" className="card Contact to-hide">
            <h2>{props.header}</h2>
            <Input 
                name="Name"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Name || ''}
            />
            <Input 
                name="Address"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Address || ''}
            />
            <Input 
                name="Email"
                type="email"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Email  || ''}
            />
            <Input 
                name="Phone"
                type="number"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Phone || ''}
            />
            <Input 
                name="Website"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Website || ''}
            />
            <Input 
                name="LinkedIn"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.LinkedIn || ''}
            />
            <Input 
                name="Other"
                type="text"
                handleChange={(e) => props.handleChange(e, 'Contact')}
                value={props.value.Other || ''}
            />
             
        </div>
    )
}


export default Contact