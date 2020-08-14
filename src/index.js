import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './pages/User';
import Home from './pages/Home';
import Login from './pages/Login';
import Submit from './pages/Submit';
import ComoDenunciar from './pages/ComoDenunciar';
import ErrorPage from './pages/ErrorPage';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CadastroDenuncia from './pages/CadastroDenuncia';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route  exact path='/' component={Home} />
      <Route  path='/como-denunciar' component={ComoDenunciar} />
      <Route  path='/login' component={Login} />
      <Route  exact path='/user' component={User} />
      <Route  path='/submit' component={Submit} />
      <Route  path='/user/denunciar' component={CadastroDenuncia} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
