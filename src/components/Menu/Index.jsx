import React, {useState} from 'react';
import Sobre from '../../pages/Home/Sobre';
import ComoDenunciar from '../../pages/Home/ComoDenunciar'
import './Index.css'

export default function Menu(props) {
    const [active, setActive] = useState(false);
    const hasBanner = props.hasBanner;
    return(
    <>
        {hasBanner ?
        <div className='banner'>
            <span>Todos contra a Dengue!</span>
        </div> :
        <div/>
        }
        
        <ul className='nav-color list-layout'>
             <li><a role='button' className={active ? 'btn-nav' : 'btn-nav active'} onClick={() => setActive(false)} >Home</a></li> 
             <li><a role='button' className={active ? 'btn-nav active' : 'btn-nav'} onClick={() => setActive(true)}>Como Denunciar?</a></li> 
            <li><a className='btn-nav' href='/user'>Denuncie Agora</a></li>
        </ul>
        
        {active ? <ComoDenunciar/> : <Sobre/>}
        
    </>
    )
}