import React from 'react';

import Logo from '../assets/logo.png'

import './Header.css'

export default props =>{
    const aux = props.label2
    return(
        <header className='color layout'>
            <img className='logo' src={Logo} alt="Logo do município de Mogi Mirim"/>           
            <ul className='layout'>
                <li >
                    <a className='button' href={props.link1}>{props.label1}</a>
                </li>

                { aux ?
                    <li>
                        <a className='button' href={props.link2}>{props.label2}</a>
                    </li> :
                    <span/>
                }

            </ul>
        </header>
    )
}