import React, {useState} from 'react';

import Sobre from './Sobre';
import ComoDenunciar from './ComoDenunciar'

export default function Menu() {
    const [active, setActive] = useState(0);
    return(
    <>
        <div className='banner'>
            <span className='text' >Todos contra a Dengue!</span>
        </div>
        
        <ul className='nav-color list-layout'>
             <li><a role='button' className={active ? 'btn-nav' : 'btn-nav active'} onClick={() => setActive(0)} >Home</a></li> 
             <li><a role='button' className={active ? 'btn-nav active' : 'btn-nav'} onClick={() => setActive(1)}>Como Denunciar?</a></li> 
            <li><a className='btn-nav' href='/user'>Denuncie Agora</a></li>
        </ul>
        
        {active ? <Sobre/> : <ComoDenunciar/>}
        
    </>
    )
}