import React from 'react'
import uniqid from 'uniqid'

function Preview(props){

    let {Contact, Education, AllEducation} = props.data


    return (
        <div className="preview to-hide hide">
            <div className="preview__container container">
                <h2>{Contact.Name}</h2>
                <div className="preview__section contact-section">
                    <div>
                        <p>{Contact.Address}</p>
                        <p>{Contact.Email}</p>
                        <p>{Contact.Phone}</p>
                    </div>
                    <div>
                        <p>{Contact.Website}</p>
                        <p>{Contact.LinkedIn}</p>
                        <p>{Contact.Other}</p>
                    </div>
                </div>
                {Contact.length == 0 ? '' : <hr></hr>}
                

                <div className="preview__section">
                    <h3>{Education.length == 0 && AllEducation.length == 0 ? '' : 'Education'}</h3>
                    {AllEducation.map((item, index) => {
                        if (item.School || item.Course){
                            return <div key={uniqid()} className="preview__card">
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
                    {Education.length == 0 && AllEducation.length == 0 ? '' : <hr></hr>}
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