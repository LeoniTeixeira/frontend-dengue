import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ComoDenunciar from './pages/ComoDenunciar';

import Login from './pages/Login';
import Signin from './pages/Signin';

import User from './pages/User';

import CadastrarDenuncia from './pages/CadastrarDenuncia';
import AlterarDenuncia from './pages/AlterarDenuncia';
import ListarDenuncias from './pages/ListarDenuncias';

import AlterarCidadao from './pages/AlterarCidadao';
import ListarCidadaos from './pages/ListarCidadaos';

import CadastrarFuncionario from './pages/CadastrarFuncionario';
import AlterarFuncionario from './pages/AlterarFuncionario';
import ListarFuncionarios from './pages/ListarFuncionarios';

import CadastrarVisita from './pages/CadastrarVisita';
import ListarVisitas from './pages/ListarVisitas';

export default props => (
    <Router>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/como-denunciar' component={ComoDenunciar} />

        <Route  path='/login' component={Login} />
        <Route  path='/signin' component={Signin} />

        <Route  exact path='/user' component={User} />

        <Route  path='/user/denunciar' component={CadastrarDenuncia} />
        <Route  path='/user/alterar-denuncia' component={AlterarDenuncia} />
        <Route  path='/user/listar-denuncias' component={ListarDenuncias} />

        <Route  path='/user/alterar-cidadao' component={AlterarCidadao} />
        <Route  path='/user/listar-cidadaos' component={ListarCidadaos} />

        <Route  path='/user/cadastrar-funcionario' component={CadastrarFuncionario} />
        <Route  path='/user/alterar-funcionarios' component={AlterarFuncionario} />
        <Route  path='/user/listar-funcionarios' component={ListarFuncionarios} />
        
        <Route  path='/user/cadastrar-visita' component={CadastrarVisita} />
        <Route  path='/user/listar-visitas' component={ListarVisitas} />

      </Switch>
    </Router>
)