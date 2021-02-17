import React, { useState} from 'react';
import './_header.scss';

import Link from '../../components/Link'

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
            <nav className="header__nav">
                <Link link={"Basic Info"}/>
                <Link link={"Contact"}/>
                <Link link={"Education"}/>
                <Link link={"Experience"}/>
            </nav>
            
        </header>
        
    )
}

export default Header