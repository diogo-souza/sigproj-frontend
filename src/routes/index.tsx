import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Consulta from 'pages/Consulta';
import FaleConosco from 'pages/FaleConosco';
import Login from 'pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/consulta" component={Consulta} />
    <Route path="/fale-conosco" component={FaleConosco} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
