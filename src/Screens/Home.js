import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";
import {Chart as ChartJS } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";
import { BarChart } from '../Charts/BarChart';
import '../css/Home.css';
//import LineChart from '../Components/LineChart';
import {
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

import { mgmtmilkAction } from '../Actions/mgmtmilkAction';
import { DoughnutChart } from "../Charts/DoughnutChart";



export default function Home(props) {
  
  const mgmilkdata = useSelector(state=> state.mgmtmilkdata)
  const {loading,error} = mgmilkdata;
  const [formvalues,setFormvalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {sloading,isdataloaded,serror} = mgsaledata;
  const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  //const [saledata] = usemgsaleMutation()
  const dispatch = useDispatch()
    useEffect( ()=> {
            //dispatch(mgmtsaleAction(mgsalevalues));
            //getsaledataSlice();
            //dispatch(mgmtsaleAction(mgsalevalues))
            //filldata();

    }, []);
    const sdsdata=[];
  const [text, setText] = useState('Enter text here');
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }
 const data ={
  datasets:[{
    data:[10,20,30],
    backgroundColor:[
      'red',
      'blue',
      'yellow'
    ]
  }],
  labels:[
    'Red',
    'Yellow',
    'Blue'
  ],
 }

 const options = {
  plugins: {
    legend: {
      //bottom , top , left , right
      position: "top",
    },
  },
};
  const transformedData = [];
  
  const cdata = [
    
    { name: "Group A", value: 200, fill: "#1cc88a" },
    { name: "Group B", value: 100, fill: "#2c9faf" },
    { name: "Group C", value: 300, fill: "#4e73df" }
    
  ];
 
  const ddata = [
    { name: "BNG", qty: 4.1  },
    { name: "IND", qty: 2.4 },
    { name: "JGM", qty: 3.5 },
    {name:"NGR",qty:3.2 },
    {name:"VNT",qty:4.4 },
    { name:"VMD",qty:2.4}
  ];
  const gdata = [
    {date:"01-01-2022", name: "JAN", LTRS: 0 ,FAT:4.2,SNF:8.2 },
    {date:"01-01-2022", name: "FEB", LTRS: 10000, FAT:4.9,SNF:8.9 },
    {date:"01-01-2022", name: "MAR", LTRS: 5000,FAT:3.8,SNF:8.3 },
    {date:"01-01-2022",name:"APR",LTRS:15000,FAT:4.1,SNF:8.3 },
    {date:"01-01-2022",name:"MAY",LTRS:10000,FAT:3.9,SNF:8.3 },
    {date:"01-01-2022", name:"JUN",LTRS:20000,FAT:3.7,SNF:8.2},
    {date:"01-01-2022", name: "JUL", LTRS: 15000 ,FAT:4.2,SNF:8.2 },
    {date:"01-01-2022", name: "AUG", LTRS: 25000, FAT:4.9,SNF:8.9 },
    {date:"01-01-2022", name: "SEP", LTRS: 20000,FAT:3.8,SNF:8.3 },
    {date:"01-01-2022",name:"OCT",LTRS:30000,FAT:4.1,SNF:8.3 },
    {date:"01-01-2022",name:"NOV",LTRS:25000,FAT:3.9,SNF:8.3 },
    {date:"01-01-2022", name:"DEC",LTRS:40000,FAT:3.7,SNF:8.2}
  ];

  
 
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
        
      
        <div className="mcontainer" style={{ background: '#f8f9fc'}}>
        <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Welcome User</div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>


<hr className="sidebar-divider"/>

<div className="sidebar-heading">
    Interface
</div>
<li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Addons
            </div>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="calendar.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Calendar</span></a>
            </li>
            <hr className="sidebar-divider d-none d-md-block"/>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
</ul>
</div>
          <div className="d-flex justify-content-left">
            <h2>Dashboard</h2>
          </div>
          <div className='d-flex justify-content-center row'>
            <div className='col'>
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
           <div className='col'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">EARNINGS (ANNUAL)</h5>
              <p className="card-text">215000</p>
            </div>
          </div>
          </div>
          <div className='col'>
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
          <div className='col'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">PRENDING REQUESTS</h5>
              <p className="card-text">18</p>
            </div>
          </div>
          </div>
          </div>
        <div className="d-flex justify-content-center row my-3">
        
        <div className="col">
        <div className="card">
        <div className="card-header">
        <h5>Earnings Overview</h5>
        </div>
        <div className="d-flex justify-content-center my-4">
        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={gdata}>
          <Legend/>
          <Line type="monotone" dataKey="LTRS" stroke="#2196F3" strokeWidth={3}/>
          <Line type="monotone" dataKey="FAT" stroke="#F44236" strokeWidth={3}/>
          <Line type="monotone" dataKey="SNF" stroke="#FFCA29" strokeWidth={3}/>
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip/>
         </LineChart>
          {/* <CartesianGrid stroke="#ccc"/> */}
         </ResponsiveContainer>
         </div>
         </div>
         </div>
         <div className="col">
         <div className="card">
        <div className="card-header">
        <h5>Revenue Sources</h5>
        </div>
        <div className="d-flex justify-content-center my-4">
        <ResponsiveContainer width="100%" height={300}>
         <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={cdata}
            cx={180}
            cy={140}
            innerRadius={100}
            outerRadius={120}
            Legend
          />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
        </div>
         </div>
         </div>
         </div>
        <div className="container my-5 mx-3">
         <BarChart/>
         <DoughnutChart/>
         <PieChart width={400} height={400}>
          <Pie
            dataKey="qty"
            isAnimationActive={true}
            data={ddata}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
        </div>
    </>
  )
}
