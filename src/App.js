import React, { useState } from 'react';
import Home from './Screens/Home';
import About from './Screens/About';
import LoginPage from './Screens/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Ttable from './Screens/table';



export default function App() {
  const isLoggedIn = useSelector(state=> state.userauth)
  console.log(isLoggedIn)
  return ( 
    <BrowserRouter>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/loginpage" /> : <LoginPage />}/>
        <Route path="/loginpage" element={<LoginPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/table" element={<Ttable/>} />
        </Routes>
      </BrowserRouter>
  );
}