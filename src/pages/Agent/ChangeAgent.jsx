import React from 'react';
import Header from '../../components/Header/Index';

export default props => (
    <>
        <Header link1='/user' label1='Voltar' />
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Alterar Funcionário</h1>

            <form>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="nomeFuncionario">Nome</label>
                        <input className="form-control input-form" type="text" id="nomeFuncionario" />
                    </div>

                    <div className="col-md-6 form-group">
                        <label htmlFor="telefoneFuncionario">Telefone</label>
                        <input className="form-control input-form" type="text" id="telefoneFuncionario" maxlength="11"/>
                    </div>

                    <div className="col-md-6 form-group">
                        <label htmlFor="emailFuncionario">E-mail</label>
                        <input className="form-control input-form" type="email" id="emailFuncionario" />
                    </div>
                </div>

                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Alterar</button>
            </form>
        </main>
    </>
)

