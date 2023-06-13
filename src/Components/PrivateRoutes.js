import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const login = useSelector(state=> state.userLogin)
  const { accessToken } = login;
    console.log('logging from privateroutes')
    console.log(accessToken);
    //let auth = {'token':accessToken}
    return(
        //auth.token ? <Outlet/> : <Navigate to="/"/>
        accessToken ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes