import React from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/login' label1='Entrar'
                link2='/submit' label2='Cadastrar'
        />
        <Menu active={0}/>
        <Footer/>
    </>
)