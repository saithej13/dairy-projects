import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";
import {Chart as ChartJS } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";
import { BarChart } from '../Charts/BarChart';
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
    tdate:'12-02-2022'
  })
  //const [saledata] = usemgsaleMutation()
  const dispatch = useDispatch()
    useEffect( ()=> {
            dispatch(mgmtsaleAction(mgsalevalues));
            //getsaledataSlice();
            //dispatch(mgmtsaleAction(mgsalevalues))
            //filldata();

    }, []);
    const sdsdata=[];
     async function getsaledataSlice(){
      //const saleData = await saledata({ mgsalevalues }).unwrap()
    }
    const filldata=()=>{
      for(let i=0;i<mgsaledata?.data?.["data"]?.length;i++)
          {
            const item = mgsaledata.data["data"][i];
            const transformedItem = {
              tdate:item.TDATE,
              catname:item.CATNAME,
              qty:item.QTY,
              //name: item.bname, // Modify this based on the actual key in your API data
              //qty: parseInt(item.LTRS) // Modify this based on the actual key in your API data
            };
            sdsdata.push(transformedItem);
          }
          //console.log(slabels)
    }
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
  let marray=()=>{
  

      for(let i=0;i<mgmilkdata?.data?.["data"]?.length;i++)
      {
        const item = mgmilkdata.data["data"][i];
        const transformedItem = {
          name: item.bname, // Modify this based on the actual key in your API data
          qty: parseInt(item.LTRS) // Modify this based on the actual key in your API data
        };

        transformedData.push(transformedItem);
      }
      console.log(transformedData);
      console.log(gdata)
      
  }
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
    marray();
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
        <div className="container" style={{ background: '#f8f9fc'}}>
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
