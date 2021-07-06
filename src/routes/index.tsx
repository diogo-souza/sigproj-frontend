import React from 'react';
import { Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Consulta from 'pages/Consulta';
import FaleConosco from 'pages/FaleConosco';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

import MeuPerfil from 'pages/Perfil/MeuPerfil';
import MinhaSenha from 'pages/Perfil/MinhaSenha';
import Endereco from 'pages/Perfil/Endereco';
import Escolaridade from 'pages/Perfil/Escolaridade';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/consulta" component={Consulta} />
    <Route path="/fale-conosco" component={FaleConosco} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/perfil/eu" component={MeuPerfil} />
    <Route path="/perfil/senha" component={MinhaSenha} />
    <Route path="/perfil/endereco" component={Endereco} />
    <Route path="/perfil/escolaridade" component={Escolaridade} />
  </Switch>
);

export default Routes;
