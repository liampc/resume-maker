import React, { useState} from 'react';
import './_header.scss';

function Header(){

    return(
        <header className="header container">
            <div className="header__toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>
                Resume Maker
            </h1>
        </header>
        
    )
}

export default Header