import React from 'react';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isRestricted?: boolean;
  component: React.ComponentType;
}

const PublicRoute: React.FC<RouteProps> = ({
  isRestricted = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return user && isRestricted ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location },
            }}
          />
        ) : (
          <Component />
        );
      }}
    />
  );
};

export default PublicRoute;
