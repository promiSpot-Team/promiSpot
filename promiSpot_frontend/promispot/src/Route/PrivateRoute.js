import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
  const isLogin = useSelector(state => state?.user?.isLogin)

  console.log('로그인 됐냐? ', isLogin)
  return (
    isLogin ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;