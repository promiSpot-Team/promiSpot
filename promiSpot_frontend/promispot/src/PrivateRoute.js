import React from 'react';
import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const isLogin = localStorage.getItem('isLogin')

  return (
    <Route {...rest} render={props => (
      isLogin ?
        <Component {...props} />
      : redirect('/login')
    )} />
  );
};

export default PrivateRoute;