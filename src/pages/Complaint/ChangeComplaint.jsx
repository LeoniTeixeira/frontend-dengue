import React from 'react';
import Header from '../../components/Header/Index';

export default props =>(
    <>
        <Header link1='/user/listar-denuncias' label1='Voltar'/>
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Altera Status da Denúncia</h1>
            <form>
                <input className="form-control" type="hidden" />
                <input className="form-control" type="hidden" id="id"/>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="nomeCidadao">Nome</label>
                        <input type="text" className="form-control input-form" id="nomeCidadao" />
                    </div>
                    <div className="col-md-6 form-group ">
                        <label htmlFor="cpfCidadao">CPF</label>
                        <input type="text" className="form-control input-form" id="cpfCidadao" />
                    </div>
                    <div className="col-md-6 form-group ">
                        <label htmlFor="telefoneCidadao">Telefone</label>
                        <input type="text" className="form-control input-form" id="telefoneCidadao" />
                    </div>
                </div>
                <h5 className="mb-3 text-center">Endereço do local da denuncia</h5>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="ruaDenuncia">Rua</label>
                        <input type="text" className="form-control input-form" id="ruaDenuncia" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="bairroDenuncia">Bairro</label>
                        <input type="text" className="form-control input-form" id="bairroDenuncia" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-2">
                        <select className="custom-select form-group">
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
    </>
)

