import React from 'react';

export default props =>(
    <main className='container text-justify center pb-5' >
        <h1 class="font text-center display-4 py-4">Para poder denunciar um local de risco, é
            necessário efetuar um cadastro
            no sistema, fornecendo as seguintes informações:</h1>

        <ul class="list-group text-justify">
            <li className="list-group-item list-group-item-action border border-primary mb-3"><b>Nome completo</b> e 
                <b> CPF </b>
                para a
                identificação e garantia da
                autenticidade das
                denúncias.</li>
            <li className="list-group-item list-group-item-action border border-primary mb-3"><b>Telefone</b> e
                <b> E-mail </b>
                para contato
                e/ou envio de informações
                sobre o caso
                denunciado.</li>
            <li className="list-group-item list-group-item-action border border-primary mb-3">Uma <b>senha</b> que servirá
                para
                garantir que apenas o dono da
                conta a acesse.
            </li>
            <li className="list-group-item list-group-item-action border border-primary mb-3">Após realizar o
                <b> cadastro </b>,
                é
                preciso <b> iniciar uma sessão </b>
                com sua conta no
                sistema,
                utilizando seu <b> E-mai </b>
                como login e inserindo a senha cadastrada anteriormente.</li>
            <li className="list-group-item list-group-item-action border border-primary mb-3">Isto feito, basta clicar em
                <b>“Denunciar Agora”</b> e já
                chegará à <b>página de
                    denúncias</b>
            </li>

            <p className="font text-center display-4 py-3">Página de Denúncia</p>

            <li className="list-group-item border-info mb-3 text-info">Nesta tela, deverão ser
                preenchidos os seguintes campos:

                <ul className='p-0'>
                    <li className="list-group-item list-group-item-action border border-info my-3">Informações do
                        Denunciante: <b>Nome, CPF</b> e <b>Telefone</b>.
                    </li>
                    <li className="list-group-item list-group-item-action border border-info mb-3">O endereço do local
                        denunciado,
                        contendo: <b>Rua/Avenida,
                            número</b> e <b>bairro.</b></li>
                    <li className="list-group-item list-group-item-action border border-info mb-3">O <b>Denunciante</b> tem
                        como
                        opção
                        fazer alguma observação,
                        como por exemplo, a
                        respeito da gravidade da
                        situação, da dificuldade de acesso ao local, ou da grande circulação de pessoas na área.</li>
                    <li className="list-group-item list-group-item-action border border-info mb-3">Também é opcional a
                        <b>               anexação de imagens</b> que forem úteis
                        como primeira
                        avaliação
                        por parte dos agentes de
                        saúde e responsáveis pelo trâmite da denúncia.</li>
                </ul>
            </li>

        </ul>
    </main>
)