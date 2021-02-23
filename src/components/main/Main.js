import React, {Component} from 'react'
import uniqid from 'uniqid'

import './_main.scss'
import Contact from './Contact'
import Education from './Education'
import Preview from './Preview'


class Main extends Component {

    constructor(){
        super()
            this.state = {
                AllEducation: [],
              Education: [],
              Contact: [],
              isOpen: false
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.showEdit = this.showEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      
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

    handleClick(section){

        this.setState(prevState => ({
                [`All${section}`] : prevState[`All${section}`].concat(this.state[section]),
                [section]: []
        }))

        console.log(this.state)
    }


    handleEdit(event, index, section){

        console.log(event.target, index, section)
        let card = document.querySelector(`.${section}`)
        card.classList.remove('hide')
        
        let addBtn = document.querySelector('.add')
        addBtn.classList.add('hide')

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


        let card = document.querySelector(`.${section}`)
        card.classList.add('hide')


        let updates =  document.querySelector('.update')
        updates.classList.add('hide')
        
    }


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



        return (
            <main className="main">
                <form >
                    <Contact
                        header={'Contact'} 
                        handleChange={this.handleChange}
                        value={this.state.Contact}
                        handleClick={this.handleClick}
                    />
                    
                    <Education 
                        header={'Education'}
                        handleChange={this.handleChange}
                        value={this.state.Education}
                        handleClick={this.handleClick}
                        handleUpdate={this.handleUpdate}
                       
                    />


                    <button className="button to-hide" onClick={this.handleSubmit}>Preview</button>
                </form>

                <Preview
                    data={this.state}
                    handleSubmit={this.handleSubmit}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    showEdit={this.showEdit}
                    isOpen={this.state.isOpen}
                />
            </main>
        )
    }
}

export default Main