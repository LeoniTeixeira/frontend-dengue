import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar' />
        <main class="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 class="font text-center display-4 py-4">Alterar Funcionário</h1>

            <form name="alteraFuncionario" method="post" action="/funcionario-altera">

                <input class="form-control" type="hidden" name="_method" value="PUT" />
                <input class="form-control" type="hidden" id="id" name="id" value="${data.funcionario.id}" />

                <div class="row">
                    <div class="col-md-6 form-group">
                        <label for="nomeFuncionario">Nome</label>
                        <input class="form-control input-form" type="text" id="nomeFuncionario" name="nomeFuncionario"
                            value="${data.funcionario.nome}" required />
                    </div>

                    <div class="col-md-6 form-group">
                        <label for="telefoneFuncionario">Telefone</label>
                        <input class="form-control input-form" type="text" id="telefoneFuncionario" name="telefoneFuncionario"
                            value="${data.funcionario.telefone}" maxlength="11" required />
                    </div>

                    <div class="col-md-6 form-group">
                        <label for="emailFuncionario">E-mail</label>
                        <input class="form-control input-form" type="email" id="emailFuncionario" name="emailFuncionario"
                            value="${data.funcionario.email}" required />
                    </div>
                </div>

                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Alterar</button>
            </form>
        </main>
        <Footer />
    </>
)

