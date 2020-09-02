import React from 'react';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';

export default props => (
    <>
        <Header link1='/user' label1='Voltar' />
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 className="text-center display-4 py-4">Cadastro de Funcionário</h1>
            <form>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="nomeFuncionario">Nome</label>
                        <input type="text" className="form-control input-form" id="nomeFuncionario" placeholder="Insira o nome" />
                    </div>
                </div>
                 <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cpfFuncionario">CPF</label>
                        <input type="text" className="form-control input-form" id="cpfFuncionario" placeholder="999.999.999-99" pattern=".{14}" /> 
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="telefoneFuncionario">Telefone</label>
                        <input type="text" className="form-control input-form" id="telefoneFuncionario" placeholder="(99) 99999-9999" pattern=".{15}" />
                    </div>
                </div> 
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="emailFuncionario">E-mail</label>
                        <input type="email" className="form-control input-form" id="emailFuncionario" placeholder="Insira o E-mail" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="senhaFuncionario">Senha</label>
                        <input className="form-control input-form" type="password" minlength="6" id="senhaFuncionario" name="senhaFuncionario" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="confirmaSenhaFuncionario">Confirmar Senha</label>
                        <input className="form-control input-form" type="password" minlength="6" id="confirmaSenhaFuncionario"/>
                    </div>
                    <div className="form-group col-md-4 mb3">
                        <label htmlFor="nivelAcesso">Cargo</label>
                        <select id="nivelAcesso" className="form-control input-form">
                            <option readonly></option>
                            <option value="Administrador">Administrador</option>
                            <option value="Agente de Saúde">Agente de Saúde</option>
                        </select>
                    </div>
                </div>
                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Cadastrar</button>
            </form>
        </main>
        <Footer />
    </>
)
