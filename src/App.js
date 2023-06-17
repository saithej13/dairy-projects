import React, { useState } from 'react';
import Home from './Screens/Home';
import About from './Screens/About';
import LoginPage from './Screens/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Ttable from './Screens/table';
import PrivateRoutes from './Components/PrivateRoutes';
// import './App.css'



export default function App() {
  const isLoggedIn = useSelector(state=> state.userauth)
  return ( 
    <Routes>
      {/* public routes */}
      <Route path="/" element={<LoginPage/>} />
      {/* protected / Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/table" element={<Ttable/>} />
         </Route>

  </Routes>
  );
}