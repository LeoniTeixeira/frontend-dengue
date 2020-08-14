import React from 'react';

export default props =>{
    const type = props.type;
    return(
        type ?
        <div className='center my-5'>
            <h1>Cidadão</h1><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="/user/denunciar">Criar Denuncia</a><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Minhas Denuncias</a><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Meus Dados</a>
        </div> :

        <div className='center my-5'>
            <h1>Agente de saúde</h1><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Listar Denuncias</a><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Listar Cidadãos</a><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Listar Funcionários</a><br/>
            <a className='btn btn-primary btn-block col-4 mx-auto my-auto' href="">Visitas</a>
        </div> 

    )
}