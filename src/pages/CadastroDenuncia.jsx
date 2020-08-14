import React from 'react';
import Header from '../components/Header';
import ContainCadastroDenuncia from '../components/contain/User/Cidadao/ContainCadastroDenuncia';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/user' label1='Voltar'/>
        <ContainCadastroDenuncia/>
        <Footer/>
    </>
)