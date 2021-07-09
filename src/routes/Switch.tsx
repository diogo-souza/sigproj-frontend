import React, { useEffect } from 'react';
import nprogress from 'nprogress';

import {
  Switch as ReactRouterSwitch,
  SwitchProps as ReactRouterSwitchProps,
  useLocation,
} from 'react-router-dom';

const Switch: React.FC<ReactRouterSwitchProps> = ({
  children,
}: ReactRouterSwitchProps) => {
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return <ReactRouterSwitch>{children}</ReactRouterSwitch>;
};

export default Switch;
