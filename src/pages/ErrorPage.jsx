import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainErrorPage from '../components/contain/Base/ContainErrorPage';

export default props =>(
    <>
        <Header link1='/' label1='Voltar'
                link2='' label2=''
        />
        <ContainErrorPage/>
        <Footer/>
    </>
)