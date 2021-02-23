import React, { useState} from 'react';
import uniqid from 'uniqid';


import './_header.scss';
import Link from './Link'




function Header(){

    const links = ['Contact', 'Education', 
    'Experience', 'Skills', 'Certifications']

    const displayLinks = links.map(item => {
        return <Link link={item} key={uniqid()} />
    })


    function handleClick(){
        
        let elems = document.querySelectorAll('.toToggle')

        elems.forEach(el => {
            if (el.classList.contains('open')){
                el.classList.remove('open')
            } else {
                el.classList.add('open')
            }
        })
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
            <div className="header__overlay toToggle">
                {displayLinks}
            </div>
            
        </header>
        
    )
}

export default Header