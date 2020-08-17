import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>{
    const type = 1;
    return(
        <>
            <Header link1='/' label1='Sair'/>
            {type ?
            <div className='text-center col-lg-4 col-md-6 col-xs-10 mx-auto py-5'>
                <h1>Cidadão</h1><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="/user/denunciar">Criar Denuncia</a><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="/user/lista-denuncia">Listar Denuncias</a><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="">Meus Dados</a>
            </div> :

            <div className='text-center py-5 '>
                <h1>Agente de saúde</h1><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="">Listar Denuncias</a><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="">Listar Cidadãos</a><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="">Listar Funcionários</a><br/>
                <a className='btn btn-primary btn-block mx-auto ' href="">Visitas</a>
            </div>} 
            <Footer/>
        </>
    )
}