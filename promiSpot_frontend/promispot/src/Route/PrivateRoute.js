import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'

const PrivateRoute = ({component: Component, ...rest}) => {
  const isLogin = useSelector(state => state?.user?.isLogin)

  return (
    isLogin ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;