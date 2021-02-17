import React from 'react'

import './_main.scss'
import Input from '../../components/Input'

function Section(props){


    return (
        <main className="main">
            <section className="main__card">
                <h2>Basic Info</h2>
                <Input name={"Name"} type={"text"} />
                <Input name={"Email"} type={"email"} />
                <Input name={"Number"} type={"number"} />
            </section>
        </main>
    )
}

export default Section