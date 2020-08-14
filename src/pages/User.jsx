import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainUser from '../components/contain/User/ContainUser';

export default props =>(
    <>
        <Header link1='/' label1='Sair'/>
        <ContainUser type={1}/>
        <Footer/>
    </>
)