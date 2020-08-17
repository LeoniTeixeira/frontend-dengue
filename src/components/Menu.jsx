import React from 'react';

import ContainHome from './Home/ContainHome';
import ContainComoDenunciar from './Home/ContainComoDenunciar'

export default props => {
    const active = props.active;
    return(
    <>
        <div className='banner'>
            <span className='text' >Todos contra a Dengue!</span>
        </div>
        
        <ul className='nav-color list-layout'>
            <li><a className={active ? 'btn-nav active' : 'btn-nav'} href='/'>Home</a></li>
            <li><a className={active ? 'btn-nav' : 'btn-nav active'} href='/como-denunciar'>Como Denunciar?</a></li>
            <li><a className='btn-nav' href='/user'>Denuncie Agora</a></li>
        </ul>
        
        {active ? <ContainHome/> : <ContainComoDenunciar/>}
        
    </>
    )
}