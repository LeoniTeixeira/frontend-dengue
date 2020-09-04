import React from 'react';
import Header from '../components/Header/Index';
import { Form } from '@unform/web';
import Input from '../components/Form/Input';

export default props =>{
    function handleSubmit(data) {
        console.log(data);
    }
    return (
        <>
            <Header link1='/' label1='Voltar'/>
            <main>
                <h1 className='text-center mt-5'>Entrar</h1>
                <div className='col-lg-4 col-md-6 col-xs-12 mx-auto'>
                    <Form onSubmit={handleSubmit}>   
                        <div className='form-group'>
                            <label htmlFor="email">E-mail</label>
                            <Input required className='form-control' type="email" name="user.email" id="email"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Senha</label>
                            <Input required className='form-control' type="password" name="user.password" id="password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="check"/>
                            <label className="form-check-label" htmlFor="check">Manter conectado</label>
                        </div> 
                        <button className='btn btn-primary btn-block mt-4' type="submit">Entrar</button>
                        <br/>
                        <p>Não possui conta? <a href='/signin'>Clique aqui</a> para se cadastrar.</p>
                    </Form> 
                </div>
            </main>
        </>
    )
}