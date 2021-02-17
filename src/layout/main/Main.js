import React from 'react'

import './_main.scss'
import Card from  "../../components/Card"


function Section(props){

    const basicInfo = [
        {name: 'Name', type: 'text' }, 
        {name: 'Email', type: 'email'},
        {name: 'Website', type: 'text'},
    ]

    const education = [
        {name: 'School', type: 'text'},
        {name: 'Course', type: 'text'},
        {name: 'School Year', type: 'number'},
    ]

    const experience = [
        {name: 'Company', type: 'text'},
        {name: 'Postion', type: 'text'},
        {name: 'Start', type: 'date'},
        {name: 'End', type: 'date'}
    ]

    const skills = [
        {name: 'Skills', type: 'text'}
    ]

    const certifications = [
        {name: 'Certifications', type:'text'}
    ]

    return (
        <main className="main">
            <Card header={"Basic Info"} inputs={basicInfo} />
            <Card header={"Education"} inputs={education}/>
            <Card header={"Work Experience"} inputs={experience}/>
            <Card header={"Skills"} inputs={skills}/>
            <Card header={"Certifications"} inputs={certifications}/>
        </main>
    )
}

export default Section