import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-12">
            <h1 className="font text-center display-4 py-4">Listagem de Visitas</h1>

            <table className="table table-bordered table-hover table-responsive" id="visita">
                <thead className="thead-light">
                    <tr className="text-center">
                        <th>Nº Visita</th>
                        <th>Agente</th>
                        <th>Data</th>
                        <th>Atividade</th>
                        <th>Tipo Visita</th>
                        <th>Código do Munícipio</th>
                        <th>Munícipio</th>
                        <th>Area</th>
                        <th>Setor Censitário</th>
                        <th>Quarteirão</th>
                        <th>Execução</th>
                        <th>CAD ou Nº Ordem</th>
                        <th>Endereço</th>
                        <th>Numero / Complemento</th>
                        <th>Trabalhado</th>
                        <th>Pendência</th>
                        <th>Tipo de Recipiente</th>
                        <th>Situação do Recipiente</th>
                        <th>Recipiente</th>
                        <th>Controle Mecânico</th>
                        <th>Tratamento Químico</th>
                        <th>Amostra</th>
                        <th>Tipo de Larvas</th>
                        <th>Progamar Retorno</th>
                        <th>Laboratório</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-center" id="">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <Footer/>
    </>
)