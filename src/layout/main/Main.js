import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import Card from  "../../components/Card"
import Input from './Input'


class Section extends Component {

    constructor(){
        super()
            this.state = {
                 Name: '',
                 Email: '',
                 Phone: '',
                 Website: '',
                 School: '',
                 Course: '',
                 Year: '',

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

    handleSubmit(event){
        event.preventDefault()
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
                        <Input 
                            name="Phone"
                            type="number"
                            handleChange={this.handleChange}
                            value={this.state.Phone}
                        />
                        <Input 
                            name="Website"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.Website}
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
                        <Input 
                            name="Course"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.Course}
                        />
                        <Input 
                            name="Year"
                            type="Date"
                            handleChange={this.handleChange}
                            value={this.state.Year}
                        />

                    </div>

                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </main>
        )
    }
}

export default Section