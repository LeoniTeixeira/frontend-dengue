import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default props =>(
        <>
            <Header link1='/user' label1='Voltar'/>
            <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
                <h1 className="font text-center display-4 py-4">Alterar Cidadão</h1>
                <form >
                    <div className='row'>
                        <div className="col-md-12 form-group">
                            <label htmlFor="nomeCidadao">Nome</label>
                            <input className="form-control input-form" type="text" id="nomeCidadao" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="telefoneCidadao">Telefone</label>
                            <input className="form-control input-form" type="text" id="telefoneCidadao" maxLength="11" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="emailCidadao">E-mail</label>
                            <input className="form-control input-form" type="email" id="emailCidadao" />
                        </div>
                    </div>
                    <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Alterar</button>
                </form>
            </main>
            <Footer/>
        </>
    )