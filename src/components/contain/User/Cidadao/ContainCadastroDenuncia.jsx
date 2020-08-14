import React from 'react';

export default props =>(
    <div className='col-8 mx-auto'>
        <h1 className="font text-center display-4 py-4">Cadastro de Denúncia</h1>
        <form method="post" enctype="multipart/form-data" action="/denuncia" >
            
            <div className="form-row">
                <div className="col-md-12 mb-3">
                    <label for="nomeCidadao">Nome</label>
                    <input type="text" className="form-control input-form" id="nomeCidadao"/>
                </div>
            </div>
            
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label for="cpfCidadao">CPF</label>
                    <input type="text" className="form-control input-form" id="cpfCidadao"/>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="telefoneCidadao">Telefone</label>
                    <input type="text" className="form-control input-form" id="telefoneCidadao"/>
                </div>
            </div>
            

            <h5 className="mb-3 text-center">Endereço do local da denuncia</h5>

            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label for="ruaDenuncia">Rua</label>
                    <input type="text" className="form-control input-form" id="ruaDenuncia"
                        placeholder="Insira a Rua"/>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="bairroDenuncia">Bairro</label>
                    <input type="text" className="form-control input-form" id="bairroDenuncia"
                        placeholder="Insira o Bairro." />
                </div>
            </div>

            <h5 className="mb-3 text-center">Selecionar apenas imagens .jpeg/.jpg ou .png</h5>

            <div className="row">
                <div className="col-lg-4 col-lg-2">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" name="imagemDenuncia" id="imagemDenuncia"
                            onchange="previewImagem()" />
                        <label className="custom-file-label" for="inputGroupFile04">Selecione o arquivo</label>
                    </div>
                </div>
            </div>

            <div className="py-3 text-center">
                <img className="mx-auto img-fluid" id="preview" />
            </div>

            <div className="pb-3">
                <label for="observacoesDenuncia">Observações</label>
                <textarea id="observacoesDenuncia" className="form-control" name="observacoesDenuncia" rows="3"></textarea>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-4">
                    <button type="submit" className='btn btn-primary btn-block my-4'
                        onsubmit="unmask()">Cadastrar</button>
                </div>
            </div>
        </form>
    </div>
)