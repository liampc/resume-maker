import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import Form from './Form'


class Main extends Component {

    constructor(){
        super()
            this.state = {
                Contact: [],
                Education: [],
                AllEducation: [],
                Experience: [],
                AllExperience: [],
                Skills: [],
                AllSkills: [],
                Certifications: [],
                AllCertifications: []
            }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.showEdit = this.showEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      
    }

    // Save the values of input
    handleChange(event, header){
        const {name, value} = event.target
        
        this.setState(prevState => ({
            [header]: {...prevState[header], [name] : value}
        }))
        
    }


     // Save mutiple data into a section
     handleClick(section){

        this.setState(prevState => ({
                [`All${section}`] : prevState[`All${section}`].concat(this.state[section]),
                [section]: []
        }))

    }


    //Show the preview of the resume
    handleSubmit(event){
        event.preventDefault()
      
        let tohide = document.querySelectorAll('.to-hide')
        tohide.forEach(el => {
            if (el.classList.contains('hide')){
                el.classList.remove('hide')
            } else {
                el.classList.add('hide')
            }
           
        })
        

    }

   
    // Show the component to be edited in its section card
    handleEdit(event, index, section){


        //show / hide sections
        let card = document.querySelector(`.${section}`)
        let addBtn = document.querySelector('.add')
        let updates =  document.querySelectorAll('.update')
        
        card.classList.remove('hide')
        addBtn.classList.add('hide')
        updates.forEach(item => {
            item.classList.remove('hide')
        })


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


    //Save the updated component 
    handleUpdate(section){
        
        let index = this.state.updateIndex

        this.setState(prevState => {
            const updated = prevState[`All${section}`].map((obj, pos) => {
                return pos == index ? this.state[section] : obj
            })
            return {
                [`All${section}`]: updated,
                [section]: [],
            }
        })


        //Show / hide sections

        let card = document.querySelector(`.${section}`)
        let updates =  document.querySelectorAll('.update')

        card.classList.add('hide')
        updates.forEach(item => {
            item.classList.add('hide')
        })
        
    }


    //Delete the component from its section
    handleDelete(event, index, section){

        this.setState(prevState => {
            const updated = prevState[`All${section}`].filter((obj, pos) => {
                return pos != index 
            })
            return {
                [`All${section}`]: updated,
                
            }
        })

    }


    //Show Edit buttons in sections with mutiple inputs
    showEdit(){
    
        let edits = document.querySelectorAll('.preview__update')
        edits.forEach(el => {
           if (el.classList.contains('hide')){
               el.classList.remove('hide')
           } else {
               el.classList.add('hide')
           }
        })

    }
    

    render(){

        return(
            <Form 
                value={this.state}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleUpdate={this.handleUpdate}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                showEdit={this.showEdit}
            />
        )
    }
}

export default Main