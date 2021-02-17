import React, { useState} from 'react';
import './_header.scss';

import Link from '../../components/Link'
import Button from '../../components/Button'

function Header(){

    return(
        <header className="header container">
            <div className="header__toggle hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>
                Resume Maker
            </h1>
            <nav className="header__nav hide-for-mobile">
                <Link link={"Basic Info"}/>
                <Link link={"Contact"}/>
                <Link link={"Education"}/>
                <Link link={"Experience"}/>
            </nav>
            <div className="hide-for-mobile">
                <Button text={"SAVE"} />
            </div>
            
            
        </header>
        
    )
}

export default Header