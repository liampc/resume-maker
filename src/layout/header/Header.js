import React, { useState} from 'react';
import './_header.scss';

import Link from '../../components/Link'
import Button from '../../components/Button'

function Header(){

    const links = ['Basic Info', 'Education', 
    'Work Experience', 'Skills', 'Certifications']

    const displayLinks = links.map(item => {
        return <Link link={item} key={item} />
    })


    function handleClick(){
        console.log('hello')
    }
    

    return(
        <header className="header container">
            <div className="header__toggle hide-for-desktop"
                onClick={handleClick} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>
                Resume Maker
            </h1>
            <nav className="header__nav hide-for-mobile">
                {displayLinks}
            </nav>
            <div className="hide-for-mobile">
                <Button text={"SAVE"} />
            </div>
            
            
        </header>
        
    )
}

export default Header