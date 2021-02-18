import React, {Component} from 'react'

import './_main.scss'
import Card from  "../../components/Card"
import Input from './Input'


class Section extends Component {

    constructor(){
        super()
            this.state = {
                 Name: '',
                 Email: '',
                 School: ''

            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({
            [name] : value
        })

    }

    handleSubmit(){
        
        console.log(this.state)
    }
    

    render(){
        return (
            <main className="main">
                <form>
                    <div className="card">
                        <h2>Basic Info</h2>
                        <Input 
                            name="Name"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.Name}
                        />
                        <Input 
                            name="Email"
                            type="email"
                            handleChange={this.handleChange}
                            value={this.state.Email}
                        />
                    </div>
                    
                    <div className="card">
                        <h2>Education</h2>
                        <Input 
                            name="School"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.School}
                        />

                    </div>

                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </main>
        )
    }
}

export default Section