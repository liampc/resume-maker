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
                            <span onClick={(e) => props.handleEdit(e, index, 'Education')} className="preview__edit">Edit</span>
                                <p>{item.School}</p>
                                <p>{item.Course}</p>
                                <p>{item.Year}</p>
                            </div>
                        }
                        
                    })}

                    {/* <p>{Education.School}</p>
                    <p>{Education.Course}</p>
                    <p>{Education.Year}</p> */}
                </div>
            </div>
           
               
        

           
            <button className="button" value="edit" onClick={props.handleSubmit}>Back</button>
        </div>
    )
}

export default Preview