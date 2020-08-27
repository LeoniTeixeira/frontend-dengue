import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props =>(
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className='col-lg-8 col-md-10 col-xs-12 mx-auto'>
            <h1 className="font text-center display-4 py-4">Cadastro de Denúncia</h1>
            <form>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="nomeCidadao">Nome</label>
                        <input type="text" className="form-control input-form" id="nomeCidadao"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cpfCidadao">CPF</label>
                        <input type="text" className="form-control input-form" id="cpfCidadao"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="telefoneCidadao">Telefone</label>
                        <input type="text" className="form-control input-form" id="telefoneCidadao"/>
                    </div>
                </div>
                <h5 className="mb-3 text-center">Endereço do local da denuncia</h5>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="ruaDenuncia">Rua</label>
                        <input type="text" className="form-control input-form" id="ruaDenuncia"
                            placeholder="Insira a Rua"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="bairroDenuncia">Bairro</label>
                        <input type="text" className="form-control input-form" id="bairroDenuncia"
                            placeholder="Insira o Bairro." />
                    </div>
                </div>
                <h5 className="mb-3 text-center">Selecionar apenas imagens .jpeg/.jpg ou .png</h5>
                <div className="row">
                    <div className="col-lg-4 col-lg-2">
                        <div className="custom-file">
                            <label className="custom-file-label" htmlFor="imagemDenuncia">Selecione o arquivo</label>
                            <input type="file" className="custom-file-input" id="imagemDenuncia"/>
                        </div>
                    </div>
                </div>
                <div className="py-3 text-center">
                    <img className="mx-auto img-fluid" id="preview" />
                </div>
                <div className="pb-3">
                    <label htmlFor="observacoesDenuncia">Observações</label>
                    <textarea className="form-control" id="observacoesDenuncia" rows="3"></textarea>
                </div>
                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Cadastrar</button>
            </form>
        </main>
        <Footer/>
    </>
)