import React from 'react'

function Preview(props){

    let {Basic} = props.data

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
            </div>
           
            <button className="button" value="edit" onClick={props.handleSubmit}>Edit</button>
        </div>
    )
}

export default Preview