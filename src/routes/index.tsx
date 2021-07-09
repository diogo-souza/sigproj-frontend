import React from 'react';

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
import Switch from './Switch';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/consulta" component={Consulta} />
    <Route path="/fale-conosco" component={FaleConosco} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/perfil/eu" component={MeuPerfil} isPrivate />
    <Route path="/perfil/senha" component={MinhaSenha} isPrivate />
    <Route path="/perfil/endereco" component={Endereco} isPrivate />
    <Route path="/perfil/escolaridade" component={Escolaridade} isPrivate />
  </Switch>
);

export default Routes;
