import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import User from '../pages/User/Index';
import RegisterComplaint from '../pages/Complaint/RegisterComplaint';
import ChangeComplaint from '../pages/Complaint/ChangeComplaint';
import ListComplaint from '../pages/Complaint/ListComplaint';
import ChangeCitizen from '../pages/Citizen/ChangeCitizen';
import ListCitizen from '../pages/Citizen/ListCitizen';
import RegisterAgent from '../pages/Agent/RegisterAgent';
import ChangeAgent from '../pages/Agent/ChangeAgent';
import ListAgent from '../pages/Agent/ListAgent';
import RegisterVisit from '../pages/Visit/RegisterVisit';
import ListVisit from '../pages/Visit/ListVisit';

export default props => {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/login' component={Login} />
        <Route  path='/signin' component={Signin} />
        <Route  exact path='/user' component={User} />
        <Route  path='/user/denunciar' component={RegisterComplaint} />
        <Route  path='/user/alterar-denuncia' component={ChangeComplaint} />
        <Route  path='/user/listar-denuncias' component={ListComplaint} />
        <Route  path='/user/alterar-cidadao' component={ChangeCitizen} />
        <Route  path='/user/listar-cidadaos' component={ListCitizen} />
        <Route  path='/user/cadastrar-funcionario' component={RegisterAgent} />
        <Route  path='/user/alterar-funcionarios' component={ChangeAgent} />
        <Route  path='/user/listar-funcionarios' component={ListAgent} />
        <Route  path='/user/cadastrar-visita' component={RegisterVisit} />
        <Route  path='/user/listar-visitas' component={ListVisit} />
      </Switch>
    </Router>
)
}