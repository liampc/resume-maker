import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import Card from  "../../components/Card"
import Input from './Input'
import BasicInfo from './BasicInfo'
import Education from './Education'


class Section extends Component {

    constructor(){
        super()
            this.state = {
              Education: []
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event, header){
        const {name, value} = event.target
        

        this.setState(prevState => ({
            // [header] : {[name] : value}
            [header]: {...prevState[header], [name] : value}
        }))
       
        console.log(header ,this.state)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }

    handleClick(header){

        console.log(header)
    }

    

    render(){



        return (
            <main className="main">
                <form>
                    <BasicInfo
                        header={'Basic Info'} 
                        handleChange={this.handleChange}
                        value={this.state.Education}
                        handleClick={this.handleClick}
                    />
                    
                    <Education 
                        header={'Education'}
                        handleChange={this.handleChange}
                        value={this.state.Education}
                        handleClick={this.handleClick}
                    />

                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </main>
        )
    }
}

export default Section