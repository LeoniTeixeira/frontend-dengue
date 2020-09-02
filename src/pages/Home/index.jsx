import React from 'react';
import Header from '../../components/Header/Index';
import Menu from '../../components/Menu/Index';
import Footer from '../../components/Footer/Index';

export default props =>(
    <>
        <Header link1='/login' label1='Entrar'
                link2='/signin' label2='Cadastrar'
        />
        <Menu hasBanner={true} />
        <Footer/>
    </>
)