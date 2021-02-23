import React from 'react'

import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Certifications from './Certifications'
import Preview from './Preview'


function Form(props){


    return (
        <main className="main">
            <form >
                <Contact
                    header={'Contact'} 
                    handleChange={props.handleChange}
                    value={props.value.Contact}
                    handleClick={props.handleClick}
                />
                
                <Education 
                    header={'Education'}
                    handleChange={props.handleChange}
                    value={props.value.Education}
                    handleClick={props.handleClick}
                    handleUpdate={props.handleUpdate}
                   
                />

                <Experience 
                    header={'Experience'}
                    handleChange={props.handleChange}
                    value={props.value.Experience}
                    handleClick={props.handleClick}
                    handleUpdate={props.handleUpdate}
                />

                <Skills
                    header={'Skills'}
                    handleChange={props.handleChange}
                    value={props.value.Skills}
                    handleClick={props.handleClick}
                    handleUpdate={props.handleUpdate}
                />

                <Certifications 
                    header={'Certifications'}
                    handleChange={props.handleChange}
                    value={props.value.Certifications}
                    handleClick={props.handleClick}
                    handleUpdate={props.handleUpdate}
                />

                <button className="button to-hide" onClick={props.handleSubmit}>Preview</button>
            </form>

            <Preview
                value={props.value}
                handleSubmit={props.handleSubmit}
                handleEdit={props.handleEdit}
                handleDelete={props.handleDelete}
                showEdit={props.showEdit}
                
            />
        </main>
    )
}

export default Form