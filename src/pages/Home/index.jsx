import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

export default props =>(
    <>
        <Header link1='/login' label1='Entrar'
                link2='/signin' label2='Cadastrar'
        />
        <Menu hasBanner={true} />
        <Footer/>
    </>
)