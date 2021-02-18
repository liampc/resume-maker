import React, {Component} from 'react'

import './_main.scss'
import Card from  "../../components/Card"


class Section extends Component {

    constructor(){
        super()
            this.state = {
                 Name: '',
                 Email: '',
                 School: ''

            }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({
            [name] : value
        })

        console.log(this.state)
    }
    

    render(){
        return (
            <main className="main">
                <form>
                    <div className="card">
                        <h2>Basic Info</h2>
                        <div className="input">
                            <label htmlFor="name"> Name:
                                <input 
                                    className="input__box"
                                    name="Name" 
                                    type="text"  
                                    onChange={this.handleChange}
                                    value={this.state.Name}
                                />
                            </label>
                        </div>
                        <div className="input">
                            <label htmlFor="Email"> Email:
                                <input 
                                    className="input__box" 
                                    name="Email" 
                                    type="email" 
                                    onChange={this.handleChange}
                                    value={this.state.Email}
                                />
                            </label>
                        </div>
                    </div>
                    
                    <div className="card">
                        <h2>Education</h2>
                        <div className="input">
                            <label htmlFor="School"> School:
                                <input 
                                    className="input__box" 
                                    name="School" 
                                    type="text" 
                                    onChange={this.handleChange}
                                    value={this.state.School}
                                />
                            </label>
                        </div>
                    </div>

                    <button>Save</button>
                </form>
            </main>
        )
    }
}

export default Section