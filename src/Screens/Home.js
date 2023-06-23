import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";
import { Doughnut } from "react-chartjs-2";
import { BarChart } from '../Charts/BarChart';
import '../css/Home.css';
import Sidebar from '../Components/sidebar';
import { mgmtmilkAction } from '../Actions/mgmtmilkAction';
import { DoughnutChart } from "../Charts/DoughnutChart";
import { LineChart } from "../Charts/LineChart";
import { PieChart } from "../Charts/PieChart";



export default function Home(props) {
  const [text, setText] = useState('Enter text here');
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }
  
  const handleclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleclicklo = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };


  return (
<>

        <Navbar title="VST TECHONOLOGIES" mode={mode} toggleMode={toggleMode} />
        
        <div className="flex row" style={{ background: '#f8f9fc'}}>   
        <div className="col" style={{marginTop:"50px"}}>
        <Sidebar/>   
          </div>    
             <div className="col">
        <div className="container" style={{marginTop:"50px"}}>
<div className="row">


  <div className="col-md-3"></div>
          
<div className="d-flex justify-content-left">
            <h2>Dashboard</h2>
          </div>    
          <div className='d-flex justify-content-center row'>
            <div className='col-md-3'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
            <div className="d-flex justify-content-center">
              <div>
              <h5 className="card-title">EARNINGS (MONTHLY)</h5>
              <p className="card-text">40000</p>
              </div>
              <div>
              <img src={require('../images/calendar.png')} width={30} height={50} alt="t"/>
              </div>
            </div>
            </div>
          </div>
          </div>
           <div className='col-md-3'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">EARNINGS (ANNUAL)</h5>
              <p className="card-text">215000</p>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
            <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">TASKS</h5>
            <div className="d-flex justify-content-between align-items-center">
            <p className="card-text">50%</p>
            <div className="progress" style={{ height: "8px", flex: 1, marginLeft: '10px' }}>
              <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
            </div>
            </div>
          </div>
        </div>
          </div>
          <div className='col-md-3'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">PRENDING REQUESTS</h5>
              <p className="card-text">18</p>
            </div>
          </div>
          </div>
          </div>
        <div className="d-flex justify-content-center row my-4">
        
        <div className="col">
        <div className="card">
        <div className="card-header">
        <h5>Earnings Overview</h5>
        </div>
        <div className="d-flex justify-content-center my-3 my-Linechart-container">
        <LineChart/>
         </div>
         </div>
         </div>
         <div className="col">
         <div className="card">
        <div className="card-header">
        <h5>Revenue Sources</h5>
        </div>
        <div className="d-flex justify-content-center my-3 my-Piechart-container">
        <PieChart/>
        </div>
         </div>
         </div>
         </div>
        <div className="container my-5 mx-3">
         <BarChart/>
         <DoughnutChart/>
        </div>

</div>



        </div>
        </div>
        </div>
    </>
  )
}
