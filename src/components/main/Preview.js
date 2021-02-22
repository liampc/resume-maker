import React from 'react'
import uniqid from 'uniqid'

function Preview(props){

    let {Basic, Education, AllEducation} = props.data


    return (
        <div className="preview to-hide hide">
            <div className="preview__container container">
                <h2>{Basic.Name}</h2>
                <div className="preview__section">
                    <h3>Contact</h3>
                    <p>{Basic.Email}</p>
                    <p>{Basic.Phone}</p>
                    <p>{Basic.Website}</p>
                </div>

                <h2>Education</h2>
                <div className="preview__section">

                    {AllEducation.map((item, index) => {
                        if (item.School || item.Course){
                            return <div key={uniqid()}>
                            <span onClick={(e) => props.handleEdit(e, index, 'Education')} className="preview__edit hide">Edit</span>
                                <p>{item.School}</p>
                                <p>{item.Course}</p>
                                <p>{item.Year}</p>
                            </div>
                        }
                        
                    })}

                </div>
            </div>

            <button className="button" value="edit" onClick={props.handleSubmit}>Back</button>
            <button className="btn__edit button" value="edit" onClick={props.showEdit}>{props.isOpen ? 'Cancel' : 'Edit'}</button>
        </div>
    )
}

export default Preview