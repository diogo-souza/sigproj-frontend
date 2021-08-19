import React from 'react';

import Home from 'pages/Home';
import Editais from 'pages/Editais';
import Edital from 'pages/Edital';
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
    <Route path="/editais" exact component={Editais} />
    <Route path="/editais/:id" exact component={Edital} />
    <Route path="/fale-conosco" exact component={FaleConosco} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/perfil/eu" exact component={MeuPerfil} isPrivate />
    <Route path="/perfil/senha" exact component={MinhaSenha} isPrivate />
    <Route path="/perfil/endereco" exact component={Endereco} isPrivate />
    <Route
      path="/perfil/escolaridade"
      exact
      component={Escolaridade}
      isPrivate
    />
  </Switch>
);

export default Routes;
