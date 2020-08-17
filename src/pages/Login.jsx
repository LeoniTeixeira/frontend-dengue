import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/' label1='Voltar'/>
        <main>
            <h1 className='text-center mt-5'>Entrar</h1>
            <form className='col-lg-4 col-md-6 col-xs-12 mx-auto login'>  
                <div className='form-group'>
                    <label htmlFor="account">Conta</label>
                    <input className='form-control' type="email" id="account"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Senha</label>
                    <input className='form-control' type="password" id="password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="check"/>
                    <label className="form-check-label" for="check">Manter conectado</label>
                </div> 
                <button className='btn btn-primary btn-block mt-4' type="submit">Entrar</button>
                <br/>
                <p>Não possui conta? <a href='/submit'>Clique aqui</a> para se cadastrar.</p>
            </form>
        </main>
        <Footer/>
    </>
)