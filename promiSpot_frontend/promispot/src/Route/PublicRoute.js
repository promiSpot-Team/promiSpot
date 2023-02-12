import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PublicRoute = ({component: Component, ...rest}) => {
  const isLogin = useSelector(state => state?.user?.isLogin)

  return (
    !isLogin ? <Outlet /> : <Navigate to={'/main'} />
  );
};

export default PublicRoute;