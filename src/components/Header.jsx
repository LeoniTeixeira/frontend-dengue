import React from 'react';

import Logo from '../assets/img/logo.png'

export default props =>{
    const aux = props.label2
    return(
        <header className='color layout'>
            <img className='logo my-auto' src={Logo} alt="Logo do município de Mogi Mirim"/>           
            <ul className='list-layout my-auto'>
                <li >
                    <a className='btn btn-danger' href={props.link1}>{props.label1}</a>
                </li>
                { aux ?
                    <li>
                        <a className='btn btn-danger ml-1' href={props.link2}>{props.label2}</a>
                    </li> :
                    <span/>
                }
            </ul>
        </header>
    )
}