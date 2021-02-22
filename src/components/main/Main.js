import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import BasicInfo from './BasicInfo'
import Education from './Education'
import Preview from './Preview'


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
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
      
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

        let tohide = document.querySelectorAll('.to-hide')
        tohide.forEach(el => {
            if (el.classList.contains('hide')){
                el.classList.remove('hide')
            } else {
                el.classList.add('hide')
            }
           
        })
        

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


    handleEdit(event, index, section){

        console.log(event.target, index, section)
      
        let updates =  document.querySelector('.update')
        updates.classList.remove('hide')

        this.setState(prevState => {
        
            const updated = prevState[`All${section}`].map((obj, pos) => {
                return pos == index ? this.state[section] : obj
            })
            return {
                [section]: prevState[`All${section}`][index],
                [`All${section}`]: updated,
                updateIndex: index

            }
        })

    }

    handleUpdate(section){
        
        let index = this.state.updateIndex
        console.log(this.state, section, index)

        this.setState(prevState => {
            const updated = prevState[`All${section}`].map((obj, pos) => {
                return pos == index ? this.state[section] : obj
            })
            return {
                [`All${section}`]: updated,
                [section]: [],
            }
        })
    }
    

    render(){



        return (
            <main className="main">
                <form className="to-hide">
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
                        handleUpdate={this.handleUpdate}
                    />


                    <button className="button" onClick={this.handleSubmit}>Preview</button>
                </form>

                <Preview
                    data={this.state}
                    handleSubmit={this.handleSubmit}
                    handleEdit={this.handleEdit}
                />
            </main>
        )
    }
}

export default Main