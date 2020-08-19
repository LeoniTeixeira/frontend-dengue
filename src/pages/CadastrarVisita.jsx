import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => (
    <>
        <Header link1='/user' label1='Voltar'/>
        <main className="col-lg-8 col-md-10 col-xs-12 mx-auto">

            <h1 className="font text-center display-4 py-4">Cadastro de Visita</h1>

            <form method="post" action="/visita">
                
                <section>
                    <h3 className="text-center my-3">Atividades</h3>

                    <div className="row justify-content-lg-center">
                        <div className="col-12 col-md-6 ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check1" type="radio" name="codAtividade" value="1"/>
                                    </div>
                                </div>

                                <label for="check1" className="form-control">Ponto Estratégico</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check2" type="radio" name="codAtividade" value="2"/>
                                    </div>
                                </div>

                                <label for="check2" className="form-control">Peso de Armadilhas</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">

                                        <input id="check3" type="radio" name="codAtividade" value="3"/>
                                    </div>
                                </div>

                                <label for="check3" className="form-control">Delimitação de Foco</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check4" type="radio" name="codAtividade" value="4"/>
                                    </div>
                                </div>

                                <label for="check4" className="form-control">Bloqueio – Contr. Criad.</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check5" type="radio" name="codAtividade" value="5"/>
                                    </div>
                                </div>

                                <label for="check5" className="form-control">Bloqueio – Nebulização</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check6" type="radio" name="codAtividade" value="6"/>
                                    </div>
                                </div>

                                <label for="check6" className="form-control">Arrastão</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check7" type="radio" name="codAtividade" value="IMOVEIS_ESPECIAS"/>
                                    </div>
                                </div>

                                <label for="check7" className="form-control">Imóveis Especiais</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check8" type="radio" name="codAtividade" value="8"/>
                                    </div>
                                </div>

                                <label for="check8" className="form-control">Criad. Especificos</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check9" type="radio" name="codAtividade" value="9" checked/>
                                    </div>
                                </div>

                                <label for="check9" className="form-control">Casa a Casa – Rotina</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check10" type="radio" name="codAtividade" value="10"/>
                                    </div>
                                </div>

                                <label for="check10" className="form-control">Casa a Casa – Intensificação</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check11" type="radio" name="codAtividade" value="11"/>
                                    </div>
                                </div>

                                <label for="check11" className="form-control">Outros</label>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="check12" type="radio" name="codAtividade" value="12"/>
                                    </div>
                                </div>

                                <label for="check12" className="form-control">ADL</label>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-center my-3">Tipo de Visita</h3>

                    <div className="row justify-content-md-between">
                        <div className="col-md-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tipoVisita1" type="radio" name="codTipoVisita" value="1" checked/>
                                    </div>
                                </div>

                                <label for="tipoVisita1" className="form-control">Rotina</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tipoVisita2" type="radio" name="codTipoVisita" value="2"/>
                                    </div>
                                </div>

                                <label for="tipoVisita2" className="form-control">Pendência</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tipoVisita3" type="radio" name="codTipoVisita" value="3"/>
                                    </div>
                                </div>

                                <label for="tipoVisita3" className="form-control">Demanda</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="codMunicipio">Código Município</label>
                            <input required className="form-control input-form" type="number" id="codMunicipio" name="codMunicipio" value="3530805" />
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="municipio">Município</label>
                            <input required className="form-control input-form" type="text" id="municipio" name="municipio" value="Mogi Mirim" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="area">Área</label>
                            <input required className="form-control input-form" type="number" id="area" name="area" />
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="setorCensitario">Setor Censitário</label>
                            <input required className="form-control input-form" type="number" id="setorCensitario" name="setorCensitario" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="quarteirao">Quarteirão</label>
                            <input required className="form-control input-form" type="number" id="quarteirao" name="quarteirao" />
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="execucao">Execução</label>
                            <input required className="form-control input-form" type="text" id="execucao" name="execucao" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="dataVisita">Data</label>
                            <input required className="form-control input-form" type="date" id="dataVisita" name="dataVisita" />
                        </div>

                        <div className="col-md-6 form-group">
                            <label for="numCadOrdem">CAD ou Nº Ordem</label>
                            <input required className="form-control input-form" type="number" id="numCadOrdem" name="numCadOrdem" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 form-group">
                            <label for="endereco">Endereço</label>
                            <input required className="form-control input-form" type="text" id="endereco" name="endereco" />
                        </div>

                        <div className="col-md-4 form-group">
                            <label for="numComplemento">Numero / Complemento</label>
                            <input required className="form-control input-form" type="text" id="numComplemento" name="numComplemento" />
                        </div>
                    </div>

                </section>

                <section>
                    <h3 className="text-center my-3">Situação do Imóvel</h3>

                    <div className="row">
                        <div className="col-8">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="situacao1" type="radio" name="trabalhado" value="Sim"/>
                                    </div>
                                </div>

                                <label for="situacao1" className="form-control">Trabalhado</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="situacao2" type="radio" name="trabalhado" value="Nao"/>
                                    </div>
                                </div>

                                <label for="situacao2" className="form-control">Pendência</label>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <select className="form-control form-group" name="codPendencia">
                                <option value=""></option>
                                <option value="F">Fechado</option>
                                <option value="D">Desocupado</option>
                                <option value="T">Temporada</option>
                                <option value="P">Parcial</option>
                                <option value="R">Recusa</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-center my-3">Recipientes</h3>
                    <label>Tipo</label>

                    <div className="row justify-content-md-between">
                        <div className="col-md-4">
                            <select className="form-control input-form form-group" name="codTipoRecipientes">
                                <option value=""> </option>
                                <option value="A">Depósito Elevado</option>
                                <option value="B">Depósito Não Elevado</option>
                                <option value="C">Móveis</option>
                                <option value="D">Fixos</option>
                                <option value="E">Pneus</option>
                                <option value="F">Passíveis Remoção I Alteração</option>
                                <option value="G">Naturais</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select className="form-control input-form form-group" name="codRecipiente">
                                <option value=""> </option>
                                <option value="1">Ligado À Rede</option>
                                <option value="2">Não Ligado A Rede</option>
                                <option value="3">Ligado A Rede</option>
                                <option value="4">Não Ligado A Rede</option>
                                <option value="5">Vaso De Planta Na Água</option>
                                <option value="6">Vasos De Planta (Diversos)</option>
                                <option value="7">Prato / Pingadeira</option>
                                <option value="8">Consumo Animal</option>
                                <option value="9">Deposito P/ Construção</option>
                                <option value="10">Depósito P/ Horticultura</option>
                                <option value="11">Piscina Desmontável</option>
                                <option value="12">Lata. Frasco. Plástico Utilizáveis</option>
                                <option value="13">Garrafas Retornáveis</option>
                                <option value="14">Balde / Regador</option>
                                <option value="15">Bandeja Geladeira/Ar Cond.</option>
                                <option value="16">Material De Construção</option>
                                <option value="17">Outros</option>
                                <option value="18">Ralo Interno</option>
                                <option value="19">Talo Externo</option>
                                <option value="20">Laje</option>
                                <option value="21">Calha</option>
                                <option value="22">Vaso Sanitário / Cx.Descarga</option>
                                <option value="23">Piscina</option>
                                <option value="24">Depósito P/ Construção</option>
                                <option value="25">Depósito P/ Horticultura</option>
                                <option value="26">Consumo Animal</option>
                                <option value="27">Outros</option>
                                <option value="28">Pneu</option>
                                <option value="29">Outros Correlatos</option>
                                <option value="30">Lata, Frasco, Plástico</option>
                                <option value="31">Garrafa Descartável</option>
                                <option value="32">Lona, Encerado, Plástico</option>
                                <option value="33">Entulho De Construção</option>
                                <option value="34">Peças / Sucatas</option>
                                <option value="35">Masseira</option>
                                <option value="36">Barco</option>
                                <option value="37">Outros</option>
                                <option value="38">Oco De Árvore E Bambu</option>
                                <option value="39">Bromélias</option>
                                <option value="40">Outros </option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select className="form-control input-form form-group" name="codSituacaoRecipientes">
                                <option value=""> </option>
                                <option value="1">Existente</option>
                                <option value="2">Com àgua</option>
                                <option value="3">Com larva</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-2">
                            <label for="quantidade">Quantidade</label>
                            <input className="form-control input-form" type="number" id="quantidade" name="quantidade" />
                        </div>
                    </div>

                </section>

                <section>
                    <h3 className="text-center my-3">Controle Mecânico</h3>

                    <div className="row">
                        <div className="col-6 col-lg-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input required id="controleMecanico1" type="radio" name="contrMecanico"
                                            value="Sim"/>
                                    </div>
                                </div>

                                <label for="controleMecanico1" className="form-control">Sim</label>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input required id="controleMecanico2" type="radio" name="contrMecanico"
                                            value="Nao"/>
                                    </div>
                                </div>

                                <label for="controleMecanico2" className="form-control">Não</label>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <h3 className="text-center my-3">Tratamento Químico</h3>

                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tratQuimico1" type="radio" name="codTratQuimico" value="1"/>
                                    </div>
                                </div>

                                <label className="form-control" for="tratQuimico1">Prod. Alter.</label>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tratQuimico2" type="radio" name="codTratQuimico" value="2"/>
                                    </div>
                                </div>

                                <label className="form-control" for="tratQuimico2">Focal</label>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tratQuimico3" type="radio" name="codTratQuimico" value="3"/>
                                    </div>
                                </div>

                                <label className="form-control" for="tratQuimico3">Perifocal</label>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="tratQuimico4" type="radio" name="codTratQuimico" value="4"/>
                                    </div>
                                </div>

                                <label className="form-control" for="tratQuimico4">Nebulização</label>
                            </div>
                        </div>

                    </div>

                </section>

                              <section>
                    <h3 className="text-center my-3">Amostra</h3>

                    <div className="row">
                        <div className="col-6 col-lg-2">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="amostra1" type="radio" name="amostra" value="Sim"/>
                                    </div>
                                </div>

                                <label className="form-control" for="amostra1">Sim</label>
                            </div>

                        </div>

                        <div className="col-6 col-lg-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input id="amostra2" type="radio" name="amostra" value="Nao"/>
                                    </div>
                                </div>

                                <label className="form-control" for="amostra2">Não</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Larvas</label>

                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input id="larvas1" type="radio" name="codLarvas" value="1"/>
                                        </div>
                                    </div>

                                    <label className="form-control" for="larvas1">Exame</label>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input id="larvas2" type="radio" name="codLarvas" value="2"/>
                                        </div>
                                    </div>

                                    <label className="form-control" for="larvas2">Ae Aegypti</label>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input id="larvas3" type="radio" name="codLarvas" value="3"/>
                                        </div>
                                    </div>

                                    <label className="form-control" for="larvas3">Ae Albopictus</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-center my-3">Programar Retorno</h3>

                    <div className="row">
                        <div className="col-6 col-lg-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input required id="progRetorno1" type="radio" name="progRetorno" value="Sim"/>
                                    </div>
                                </div>
                                <label className="form-control" for="progRetorno1">Sim</label>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input required id="progRetorno2" type="radio" name="progRetorno" value="Nao"/>
                                    </div>
                                </div>

                                <label className="form-control" for="progRetorno2">Não</label>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-center my-3">Laboratório</h3>

                    <div className="row">
                        <div className="col-8 col-md-8">
                            <div className="form-group">
                                <label for="responsavel">Responsável</label>
                                <input className="form-control input-form" type="text" id="responsavel" />
                            </div>
                        </div>

                        <div className="col-8 col-md-4">
                            <div className="form-group">
                                <label for="dataLab">Data</label>
                                <input className="form-control input-form" type="date" id="dataLab" />
                            </div>
                        </div>
                    </div>
                </section>

                             <section>
                    <h3 className="text-center my-3">Agente</h3>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="idAgente">Agente</label>
                            <input className="form-control input-form" type="text" id="idAgente" name="idAgente" value="" readonly/>
                        </div>
                    </div>
                </section>

                <button className='btn btn-primary btn-block col-lg-4 col-md-6 my-5 mx-auto' type="submit">Cadastrar</button>
                
            </form>
        </main>
        <Footer/>
    </>
)