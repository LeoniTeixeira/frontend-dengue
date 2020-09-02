import React from 'react';

function Citizen() {
  return (
    <div className='text-center col-lg-4 col-md-6 col-xs-10 mx-auto py-5 '>
        <h1>Agente de saúde</h1><br />
        <a className='btn btn-primary btn-block' href="/user/listar-denuncias">Listar Denuncias</a><br />
        <a className='btn btn-primary btn-block' href="/user/cadastrar-visita">Cadastrar Visita</a><br />
        <a className='btn btn-primary btn-block' href="/user/listar-visitas">Listar Visitas</a><br />
    </div>
  )
}

export default Citizen;
