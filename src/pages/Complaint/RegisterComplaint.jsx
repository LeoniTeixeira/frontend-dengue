import React from 'react';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { data } from '../../data/user'

export default props =>{
    function handleSubmit(data) {
        console.log(data);
    }
    return(
        <>
            <Header link1='/user' label1='Voltar'/>
            <main className='col-lg-8 col-md-10 col-xs-12 mx-auto'>
                <h1 className="font text-center display-4 py-4">Cadastro de Denúncia</h1>
                <Form initialData={data} onSubmit={handleSubmit}>
                    <Input name="user.id" className="d-none"/>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="name">Nome</label>
                            <Input readOnly className="form-control input-form" type="text" name="user.name" id="name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">E-mail</label>
                            <Input readOnly className="form-control input-form" type="email" name="user.email" id="email" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tel">Telefone</label>
                            <Input readOnly className="form-control input-form" type="text" name="user.tel" id="tel" />
                        </div>
                    </div>
                    <h5 className="mb-3 text-center">Endereço do local da denuncia</h5>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="street">Rua</label>
                            <Input required type="text" className="form-control input-form" name="addressComplaint.street" id="street"
                                placeholder="Insira a Rua"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="number">Número</label>
                            <Input required type="text" className="form-control input-form" name="addressComplaint.number" id="number"
                                placeholder="Insira o Número"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="neighborhood">Bairro</label>
                            <Input required type="text" className="form-control input-form" name="addressComplaint.neighborhood" id="neighborhood"
                                placeholder="Insira o Bairro" />
                        </div>
                    </div>
                    <h5 className="mb-3 text-center">Selecionar apenas imagens .jpeg/.jpg ou .png</h5>
                    <div className="row">
                        <div className="col-lg-4 col-lg-2">
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="imagemDenuncia">Selecione o arquivo</label>
                                <Input type="file" className="custom-file-input" name="imagemDenuncia" id="imagemDenuncia"/>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 text-center">
                        <img className="mx-auto img-fluid" id="preview" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="description">Descrição</label>
                        <TextArea required className="form-control" name="description" id="description" rows="3"/>
                    </div>
                    <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Cadastrar</button>
                </Form>
            </main>
            <Footer/>
        </>
    )
}