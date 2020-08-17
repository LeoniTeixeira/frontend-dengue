import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/' label1='Voltar'/>
        <main>
            <h1 className='text-center mt-5'>Cadastro de Cidadão</h1>
            <form className='col-lg-8 col-md-10 col-xs-12 mx-auto mt-5' id="cadastraCidadao" method="post" action="/cid">
                <div className="form-row">
                    <div className="col-lg-8 col-md-10 col-xs-12 mb-3">
                        <label for="nomeCidadao">Nome</label>
                        <input type="text" className="form-control input-form" id="nomeCidadao" 
                            placeholder="Insira o nome" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="cpfCidadao">CPF</label>
                        <input type="text" className="form-control input-form" id="cpfCidadao"  
                            placeholder="999.999.999-99" pattern=".{14}"/> 
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="telefoneCidadao">Telefone</label>
                        <input type="text" className="form-control input-form" id="telefoneCidadao"
                            placeholder="(99)99999-9999" pattern=".{15}"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="emailCidadao">E-mail</label>
                        <input type="email" className="form-control input-form" id="emailCidadao"
                            placeholder="Insira o E-mail"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="emailCidadaoConfirma">E-mail</label>
                        <input type="email" className="form-control input-form" id="emailCidadao"
                            placeholder="Confirme o E-mail"/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label for="senhaCidadao">Senha</label>
                        <input className="form-control input-form" type="password" minlength="6" id="senhaCidadao"/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label for="confirmaSenhaCidadao">Confirmar Senha</label>
                        <input className="form-control input-form" type="password" minlength="6" id="confirmaSenhaCidadao"/>
                    </div>
                </div>

                <button className='btn btn-primary btn-block col-4 mx-auto my-5' type='submit'>Entrar</button>
                        
            </form>
        </main>
        <Footer/>
    </>
)