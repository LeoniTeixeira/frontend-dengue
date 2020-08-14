import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainLogin from '../components/contain/User/ContainLogin';

export default props =>(
    <>
        <Header link1='/' label1='Voltar'/>
        <ContainLogin/>
        <Footer/>
    </>
)