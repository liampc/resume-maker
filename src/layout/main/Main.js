import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import Card from  "../../components/Card"
import Input from './Input'
import BasicInfo from './BasicInfo'

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

    handleClick(event){
        console.log(event.target.parentNode)
    }

    

    render(){

        return (
            <main className="main">
                <form>
                    <BasicInfo 
                        handleChange={this.handleChange}
                        value={this.state}
                        handleClick={this.handleClick}
                    />
                    
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