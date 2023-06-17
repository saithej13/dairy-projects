import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const login = useSelector(state=> state.userLogin)
  const { accessToken } = login;
    return(
        accessToken ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes