import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../Actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../Actions/authAction';

export default function Navbar(props){
  const navigate = useNavigate();
  const login = useSelector(state=> state.userLogin)
  const { loading, data, error,accessToken } = login;
  const dispatch = useDispatch()
  const logout =()=>{
    dispatch(LOGOUT());
  }
return(
   <nav className={`navbar navbar-fixed-top navbar-expand-lg navbar-light bg-white`}>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
  <div className="container-fluid" style={{ background: 'white'}}>
    <img src={require('./icon.png')} width={40} alt="t"/>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">                             
          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/table">Table</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            
        </div> */}
      {/* <form className="d-flex">
          <input className='form-control me-2' type="search" placeholder='Search' aria-label='Search'/>
          <button className='btn btn-outline-success' type="submit">Search</button>
      </form> */} 
      <img src={require('../images/exit.png')} onClick={logout} width={40} alt="t"/>
      </ul>
     
    </div>
  </div>
</nav>
)
}