import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main class="col-12 mx-auto">
            <h1 class="font text-center display-4 py-4">Listagem de Cidadãos</h1>
            <table class="table table-bordered table-hover table-responsive-lg" id="cidadaos">
                <thead class="thead-light">
                    <tr class="text-center">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" id="">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="/user/alterar-cidadao">Editar</a></td>
                        <td><a class="text-danger" href="">Inativar</a></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <Footer/>
    </>
)