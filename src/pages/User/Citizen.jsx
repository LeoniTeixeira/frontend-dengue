import React from 'react';

function Citizen() {
  return (
    <div className='text-center col-lg-4 col-md-6 col-xs-10 mx-auto py-5'>
        <h1>Cidadão</h1><br />
        <a className='btn btn-primary btn-block' href="/user/denunciar">Criar Denuncia</a><br />
        <a className='btn btn-primary btn-block' href="/user/listar-denuncias">Listar Denuncias</a><br />
        <a className='btn btn-primary btn-block' href="/user/dados-cidadao">Meus Dados</a>
    </div> 
  )
}

export default Citizen;