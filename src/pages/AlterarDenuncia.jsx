import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Altera Status da Denúncia</h1>

            <form name="alteraCidadao" method="post" action="/denuncia-altera">

                <input className="form-control" type="hidden" name="_method" value="PUT"/>
                <input className="form-control" type="hidden" id="id" name="id" value="${data.denuncia.id}" />

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="nomeCidadao">Nome</label>
                        <input type="text" className="form-control input-form" id="nomeCidadao" name="nomeCidadao"
                          value="${data.denuncia.cidadao}" readonly />
                    </div>

                    <div className="col-md-6 form-group ">
                        <label for="cpfCidadao">CPF</label>
                        <input type="text" className="form-control input-form" id="cpfCidadao" name="cpfCidadao"
                          value="${data.denuncia.cpf}" readonly />
                    </div>

                    <div className="col-md-6 form-group ">
                        <label for="telefoneCidadao">Telefone</label>
                        <input type="text" className="form-control input-form" id="telefoneCidadao" name="telefoneCidadao"
                          value="${data.denuncia.telefone}" readonly />
                    </div>
                </div>

                <h5 className="mb-3 text-center">Endereço do local da denuncia</h5>

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="ruaDenuncia">Rua</label>
                        <input type="text" className="form-control input-form" id="ruaDenuncia" name="ruaDenuncia"
                          value="${data.denuncia.rua}" readonly />
                    </div>

                    <div className="col-md-6 form-group">
                        <label for="bairroDenuncia">Bairro</label>
                        <input type="text" className="form-control input-form" id="bairroDenuncia" name="bairroDenuncia"
                          value="${data.denuncia.bairro}" readonly />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-lg-2">
                        <select className="custom-select form-group" name="status">
                            <option></option>
                            <option value="Pendente">Pendente</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Resolvido">Resolvido</option>
                        </select>
                    </div>
                </div>

                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Salvar</button>
                
            </form>
        </main>
        <Footer/>
    </>
    )

