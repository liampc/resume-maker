import React from 'react'
import uniqid from 'uniqid'

function Preview(props){

    let {Contact, Education, AllEducation} = props.data


    return (
        <div className="preview to-hide hide">
            <div className="preview__container container">
                <h2>{Contact.Name}</h2>
                <div className="preview__section">
                    <h3>Contact</h3>
                    <p>{Contact.Address}</p>
                    <p>{Contact.Email}</p>
                    <p>{Contact.Phone}</p>
                    <p>{Contact.Website}</p>
                    <p>{Contact.LinkedIn}</p>
                    <p>{Contact.Other}</p>
                </div>

                <div className="preview__section">
                    <h3>Education</h3>
                    {AllEducation.map((item, index) => {
                        if (item.School || item.Course){
                            return <div key={uniqid()}>
                                <span 
                                    onClick={(e) => props.handleDelete(e, index, 'Education')} 
                                    className="preview__update hide"> Delete 
                                </span>  
                                <span 
                                    onClick={(e) => props.handleEdit(e, index, 'Education')} 
                                    className="preview__update hide"> Edit
                                </span>
                                <p>{item.School}</p>
                                <p>{item.Course}</p>
                                <p>{item.Year}</p>
                            </div>
                        }
                    })}
                </div>

            </div>
            <div className="preview__buttons">
                 <button 
                    className="button" 
                    value="edit" 
                    onClick={props.handleSubmit}>
                    Back
                </button>
                <button 
                    className="btn__edit button" 
                    value="edit" 
                    onClick={props.showEdit}>
                    Edit
                </button>
            </div>
           
        </div>
    )
}

export default Preview