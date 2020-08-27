import React from 'react';

import Logo from '../assets/img/logo.png'
import { Navbar, Nav } from 'react-bootstrap';


export default props => {
    const aux = props.label2
    return (
        <Navbar collapseOnSelect expand="lg" className='color'>
            <Navbar.Brand href="/"><img className='logo' src={Logo} alt="Logo do município de Mogi Mirim" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                <a className='btn btn-block btn-danger m-1 my-auto' href={props.link1}>{props.label1}</a><div className='pb-1'/>
                    
                    {aux ?
                        <a className='btn btn-block btn-danger m-1 my-auto' href={props.link2}>{props.label2}</a>
                         :<span />
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}