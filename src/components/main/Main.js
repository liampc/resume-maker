import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import BasicInfo from './BasicInfo'
import Education from './Education'


class Main extends Component {

    constructor(){
        super()
            this.state = {
                AllEducation: [],
              Education: [],
              Basic: []
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event, header){
        const {name, value} = event.target
        

        this.setState(prevState => ({
            [header]: {...prevState[header], [name] : value}
        }))
       
        
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }

    handleClick(header){

        if (header == 'Education'){
            this.setState(prevState => ({
                AllEducation : prevState.AllEducation.concat(this.state.Education),
                Education: []
            }))
        }

        console.log(this.state)
    }

    

    render(){



        return (
            <main className="main">
                <form>
                    <BasicInfo
                        header={'Basic Info'} 
                        handleChange={this.handleChange}
                        value={this.state.Basic}
                        handleClick={this.handleClick}
                    />
                    
                    <Education 
                        header={'Education'}
                        handleChange={this.handleChange}
                        value={this.state.Education}
                        handleClick={this.handleClick}
                    />

                    <button className="button" onClick={this.handleSubmit}>Save</button>
                </form>
            </main>
        )
    }
}

export default Main