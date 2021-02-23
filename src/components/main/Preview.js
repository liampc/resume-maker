import React from 'react'
import uniqid from 'uniqid'

function Preview(props){

    let {Contact, Education, AllEducation, Experience, AllExperience, Skills, AllSkills} = props.data


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

                <div className="preview__section">
                    <h3>{Experience.length == 0 && AllExperience.length == 0 ? '' : 'Experience'}</h3>
                    {AllExperience.map((item, index) => {
                        if (item.Company || item.Position){
                            return <div key={uniqid()} className="preview__card">
                                <span 
                                    onClick={(e) => props.handleDelete(e, index, 'Experience')} 
                                    className="preview__update hide"> Delete 
                                </span>  
                                <span 
                                    onClick={(e) => props.handleEdit(e, index, 'Experience')} 
                                    className="preview__update hide"> Edit
                                </span>
                                <p>{item.Company}</p>
                                <p>{item.Address}</p>
                                <p>{item.Position}</p>
                                <p>{item.Year}</p>
                                <p>{item.Tasks}</p>
                            </div>
                        }
                    })}
                     {Experience.length == 0 && AllExperience.length == 0 ? '' : <hr></hr>}
                </div>

                <div className="preview__section">
                    <h3>{Skills.length == 0 && AllSkills.length == 0 ? '' : 'Skills'}</h3>
                    {AllSkills.map((item, index) => {
                        if (item.Skill){
                            return <div key={uniqid()} className="preview__card">
                                <span 
                                    onClick={(e) => props.handleDelete(e, index, 'Skills')} 
                                    className="preview__update hide"> Delete 
                                </span>  
                                <span 
                                    onClick={(e) => props.handleEdit(e, index, 'Skills')} 
                                    className="preview__update hide"> Edit
                                </span>
                                <p>{item.Skill}</p>
                            </div>
                        }
                    })}
                    {Skills.length == 0 && AllSkills.length == 0 ? '' : <hr></hr>}
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