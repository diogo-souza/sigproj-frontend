import React from 'react';

import Home from 'pages/Home';
import Editais from 'pages/Editais';
import Edital from 'pages/Edital';
import Propostas from 'pages/Propostas';
import Proposta from 'pages/Proposta';
import FaleConosco from 'pages/FaleConosco';
import Login from 'pages/Login';

import Dashboard from 'pages/Dashboard';
import MeuPerfil from 'pages/Perfil/MeuPerfil';
import MinhaSenha from 'pages/Perfil/MinhaSenha';
import Endereco from 'pages/Perfil/Endereco';
import Escolaridade from 'pages/Perfil/Escolaridade';

import Page404 from 'pages/Page404';

import Switch from './Switch';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => (
  <Switch>
    <PublicRoute path="/" exact component={Home} />
    <PublicRoute path="/editais" exact component={Editais} />
    <PublicRoute path="/editais/:id" exact component={Edital} />
    <PublicRoute path="/propostas" exact component={Propostas} />
    <PublicRoute path="/propostas/:id" exact component={Proposta} />
    <PublicRoute path="/fale-conosco" exact component={FaleConosco} />
    <PublicRoute path="/login" exact component={Login} isRestricted />

    <PrivateRoute path="/dashboard" exact component={Dashboard} />
    <PrivateRoute path="/perfil/eu" exact component={MeuPerfil} />
    <PrivateRoute path="/perfil/senha" exact component={MinhaSenha} />
    <PrivateRoute path="/perfil/endereco" exact component={Endereco} />
    <PrivateRoute path="/perfil/escolaridade" exact component={Escolaridade} />

    <PublicRoute path="*" component={Page404} />
  </Switch>
);

export default Routes;
