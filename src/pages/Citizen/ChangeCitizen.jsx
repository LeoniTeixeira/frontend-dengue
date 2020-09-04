import React from 'react';
import Header from '../../components/Header/Index';
import { Form } from '@unform/web';
import Input from '../../components/Form/Input';
import { data } from '../../data/user'

export default props =>{
    function handleSubmit(data) {
        console.log(data);
    }
    return(
        <>
            <Header link1='/user' label1='Voltar'/>
            <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
                <h1 className="font text-center display-4 py-4">Dados do Cidadão</h1>
                <Form initialData={data} onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="col-md-12 form-group">
                            <label htmlFor="name">Nome</label>
                            <Input className="form-control input-form" type="text" name="user.name" id="name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="tel">Telefone</label>
                            <Input className="form-control input-form" type="text" name="user.tel" id="tel" maxLength="11" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="email">E-mail</label>
                            <Input className="form-control input-form" type="email" name="user.email" id="email" />
                        </div>
                    </div>
                    <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Alterar</button>
                </Form>
            </main>
        </>
    )
}