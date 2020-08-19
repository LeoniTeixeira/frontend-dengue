import React from 'react';

import Logo from '../assets/img/logo.png'

export default props => {
    const aux = props.label2
    return (
        <header className='color layout'>
            <div>
                <img className='logo mx-auto' src={Logo} alt="Logo do município de Mogi Mirim" />
            </div>
            <div>
                <ul className=' my-auto list-layout'>
                    <li className='mx-1'>
                        <a className='btn btn-block btn-danger mx-auto my-2' href={props.link1}>{props.label1}</a>
                    </li>
                    {aux ?
                        <li className='mx-1'>
                            <a className='btn btn-block btn-danger mx-auto my-2' href={props.link2}>{props.label2}</a>
                        </li> :
                        <span />
                    }
                </ul>
            </div>

        </header>
    )
}