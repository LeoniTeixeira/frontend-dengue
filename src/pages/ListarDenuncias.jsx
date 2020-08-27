import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Listagem de Denúncia</h1>
            <table className="table table-bordered table-hover table-responsive-lg" id="denuncias">
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
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center" id="denuncia">
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <td><a href="">Visualizar Imagem</a></td>
                        <td></td>
                        <td></td>
                        <td><a href="/user/alterar-denuncia">Editar</a></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <Footer/>
    </>
)