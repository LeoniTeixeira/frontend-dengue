import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './pages/User';
import Home from './pages/Home';
import Login from './pages/Login';
import Submit from './pages/Submit';
import ComoDenunciar from './pages/ComoDenunciar';
import CadastroDenuncia from './pages/CadastroDenuncia';
import ListaDenuncia from './pages/ListaDenuncia';

export default props => (
    <Router>
      <Route  exact path='/' component={Home} />
      <Route  path='/como-denunciar' component={ComoDenunciar} />
      <Route  path='/login' component={Login} />
      <Route  exact path='/user' component={User} />
      <Route  path='/submit' component={Submit} />
      <Route  path='/user/denunciar' component={CadastroDenuncia} />
      <Route  path='/user/lista-denuncia' component={ListaDenuncia} />
    </Router>
)