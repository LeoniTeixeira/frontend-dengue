import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Listagem de Denúncia</h1>
            <table className="table table-bordered table-hover table-responsive" id="denuncias">
                <thead className="thead-light">
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Nome Cidadão</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Rua</th>
                        <th>Bairro</th>
                        <th>Imagem</th>
                        <th>Observações</th>
                        <th>Status</th>
                        <th>Mudar Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr id="denuncia">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <div>
                            <td><a href="">Visualizar Imagem</a></td>
                        </div>
                        <td></td>
                        <td></td>
                        <div>
                            <td><a href="">Alterar Status</a></td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </main>
        <Footer/>
    </>
)