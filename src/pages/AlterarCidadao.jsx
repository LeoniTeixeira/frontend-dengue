import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>(
        <>
            <Header link1='/user' label1='Voltar'/>
            <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
                <h1 className="font text-center display-4 py-4">Alterar Cidadão</h1>
                <form name="alteraCidadao" method="post" action="/cidadao-altera">
                    <input className="form-control" type="hidden" name="_method" value="PUT"/>
                    <input className="form-control" type="hidden" id="id" name="id" value="}" />
                    <div className='row'>
                        <div className="col-md-12 form-group">
                            <label for="nomeCidadao">Nome</label>
                            <input className="form-control input-form" type="text" id="nomeCidadao" name="nomeCidadao" value="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="telefoneCidadao">Telefone</label>
                            <input className="form-control input-form" type="text" id="telefoneCidadao" name="telefoneCidadao"
                                value="" maxlength="11" />
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="emailCidadao">E-mail</label>
                            <input className="form-control input-form" type="email" id="emailCidadao" name="emailCidadao"
                                value="" />
                        </div>
                    </div>
                    
                    <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Alterar</button>
                </form>
            </main>
            <Footer/>
        </>
    )