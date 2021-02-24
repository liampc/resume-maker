import React, { useState, useEffect} from 'react';
import uniqid from 'uniqid';


import './_header.scss';
import Link from './Link'




function Header(){

    const [toggle, setToggle] = useState('')

    const links = ['Contact', 'Education', 
    'Experience', 'Skills', 'Certifications']

    const displayLinks = links.map(item => {
        return <Link link={item} key={uniqid()} />
    })

    
    useEffect(() => {

        const toggleDisplay = () => {
            if (toggle === ''){
                setToggle('open')
            } else {
                setToggle('')
            }
        }

        document.querySelector('.header__toggle').addEventListener('click', toggleDisplay)

        return () => {

            document.querySelector('.header__toggle').removeEventListener('click', toggleDisplay)
        }

    }, [toggle])


    return(
        <header className="header container">
            <div className={`header__toggle hide-for-desktop toToggle ${toggle}`}>
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
            <div className={`header__overlay toToggle ${toggle}`}>
                {displayLinks}
            </div>
            
        </header>
        
    )
}

export default Header