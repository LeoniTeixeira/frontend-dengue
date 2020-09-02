import React from 'react';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-12 mx-auto">
            <h1 className="font text-center display-4 py-4">Listagem de Cidadãos</h1>
            <table className="table table-bordered table-hover table-responsive-lg" id="cidadaos">
                <thead className="thead-light">
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center" id="">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="/user/dados-cidadao">Editar</a></td>
                        <td><a className="text-danger" href="">Inativar</a></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <Footer/>
    </>
)