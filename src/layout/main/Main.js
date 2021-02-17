import React from 'react'

import './_main.scss'
import Card from  "../../components/Card"


function Section(props){

    const basicInfo = [
        {name: 'Name', type: 'text' }, 
        {name: 'Email', type: 'email'}
    ]

    const education = [
        {name: 'School', type: 'text'},
        {name: 'Course', type: 'text'},
        {name: 'School Year', type: 'number'},
    ]



    return (
        <main className="main">
            <Card header={"Basic Info"} inputs={basicInfo} />
            <Card header={"Education"} inputs={education}/>
        </main>
    )
}

export default Section