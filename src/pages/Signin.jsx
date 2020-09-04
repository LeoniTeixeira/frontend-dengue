import React from 'react'
import Header from '../components/Header/Index';
import { Form } from '@unform/web';
import Input from '../components/Form/Input';

export default props =>{
    function handleSubmit(data) {
        console.log(data);
    }
    return(
        <>
            <Header link1='/' label1='Voltar'/>
            <main>
                <h1 className='text-center mt-5'>Cadastro de Cidadão</h1>
                <div className='col-lg-8 col-md-10 col-xs-12 mx-auto mt-5'>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-8 mb-3">
                                <label htmlFor="name">Nome</label>
                                <Input type="text" className="form-control input-form" name="user.name" id="name" 
                                    placeholder="Insira o nome" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="tel">Telefone</label>
                                <Input type="text" className="form-control input-form" name="user.tel" id="tel"
                                    placeholder="(99)99999-9999" pattern=".{11}"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">E-mail</label>
                                <Input type="email" className="form-control input-form" name="user.email" id="email"
                                    placeholder="Insira o E-mail"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="emailRepeat">Confirmar E-mail</label>
                                <Input type="email" className="form-control input-form" name="emailRepeat" id="emailRepeat"
                                    placeholder="Confirme o E-mail"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="password">Senha</label>
                                <Input className="form-control input-form" type="password" minlength="6" name="user.password" id="password"
                                    placeholder="Insira sua senha" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="passwordRepeat">Confirmar Senha</label>
                                <Input className="form-control input-form" type="password" minlength="6" name="passwordRepeat" id="passwordRepeat"
                                    placeholder="Confirme sua senha"/>
                            </div>
                        </div>
                        <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Cadastrar</button>        
                    </Form>
                </div>
            </main>
        </>
    )
}