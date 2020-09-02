import React from 'react';

function Adm() {
  return (
    <div className='text-center col-lg-4 col-md-6 col-xs-10 mx-auto py-5 '>
        <h1>Administrador</h1><br />
        <h5>Denuncia</h5>
        <a className='btn btn-primary btn-block' href="/user/denunciar">Cadastrar Denuncia</a><br />
        <a className='btn btn-primary btn-block' href="/user/listar-denuncias">Listar Denuncias</a><br />
        <h5>Cidadão</h5>
        <a className='btn btn-primary btn-block' href="/user/listar-cidadaos">Listar Cidadãos</a><br />
        <h5>Funcionário</h5>
        <a className='btn btn-primary btn-block' href="/user/cadastrar-funcionario">Cadastrar Funcionários</a><br />
        <a className='btn btn-primary btn-block' href="/user/listar-funcionarios">Listar Funcionários</a><br />
        <h5>Visitas</h5>
        <a className='btn btn-primary btn-block' href="/user/cadastrar-visita">Cadastrar Visita</a><br />
        <a className='btn btn-primary btn-block' href="/user/listar-visitas">Listar Visitas</a><br />
    </div> 
  )
}

export default Adm;
