import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";
import {Chart as ChartJS } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
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



export default function Home(props,{ isLoggedIn }) {
  
  const mgmilkdata = useSelector(state=> state.mgmtmilkdata)
  const {loading,error} = mgmilkdata;
  const [formvalues,setFormvalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {sloading,serror} = mgsaledata;
  const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-07-2022'
  })
  //const [saledata] = usemgsaleMutation()
  const dispatch = useDispatch()
    useEffect( ()=> {
      try {
            //getsaledataSlice();
            //dispatch(mgmtsaleAction(mgsalevalues))
            //filldata();
           }
      catch(err){
        console.log(err);
      }
    }, [dispatch]);
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
    { name: "JAN", qty: 0 ,fat:4.2,snf:8.2 },
    { name: "FEB", qty: 10000, fat:4.9,snf:8.9 },
    { name: "MAR", qty: 5000,fat:3.8,snf:8.3 },
    {name:"APR",qty:15000,fat:4.1,snf:8.3 },
    {name:"MAY",qty:10000,fat:3.9,snf:8.3 },
    { name:"JUN",qty:20000,fat:3.7,snf:8.2},
    { name: "JUL", qty: 15000 ,fat:4.2,snf:8.2 },
    { name: "AUG", qty: 25000, fat:4.9,snf:8.9 },
    { name: "SEP", qty: 20000,fat:3.8,snf:8.3 },
    {name:"OCT",qty:30000,fat:4.1,snf:8.3 },
    {name:"NOV",qty:25000,fat:3.9,snf:8.3 },
    { name:"DEC",qty:40000,fat:3.7,snf:8.2}
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
    // <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//#f8f9fc
<>

        <Navbar title="VST TECHONOLOGIES" mode={mode} toggleMode={toggleMode} />
        <div className="container" style={{ background: '#f8f9fc'}}>
        {/* <div className="d-flex justify-content-left mx-4"> */}
          <div className="d-flex justify-content-left">
            <h2>Dashboard</h2>
          </div>
          {/* <div className='d-flex justify-content-center row mx-3'></div> */}
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
              {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
          </div>
          </div>
           <div className='col'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">EARNINGS (ANNUAL)</h5>
              <p className="card-text">215000</p>
              {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          </div>
          <div className='col'>
        {/* <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">TASKS</h5>
              <div className='row'>
                <div className='col'>
                <p className="card-text">50%</p>
                </div>
                <div className='justify-content-left'>
               <div className="progress" style={{height: "8px"}}>
              <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
                </div>
            </div>
            </div>
              <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}
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
              {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          </div>
          </div>
          {/* <label HtmlFor="exampleFormControlTextarea1" className="form-label">{text}</label> */}
          {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          <div className="container mx-3 my-3">
            <button className="btn btn-primary" onClick={handleclick}>To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleclicklo}>To Lowecase</button>
            <div style={{ color: props.colort }}>
              <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
            </div>
          </div> */}
        {/* <div className="d-flex justify-content-center row my-3 mx-3"></div> */}
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
          <Line type="monotone" dataKey="qty" stroke="#2196F3" strokeWidth={3}/>
          <Line type="monotone" dataKey="fat" stroke="#F44236" strokeWidth={3}/>
          <Line type="monotone" dataKey="snf" stroke="#FFCA29" strokeWidth={3}/>
          {/* <CartesianGrid stroke="#ccc"/> */}
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip/>
          
         </LineChart>
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
        <BarChart width={500} height={300} data={ddata} margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
          >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="qty" fill="#042743" background={{ fill: "#eee" }} />
        </BarChart>
        </div>
        </div>
    </>
  )
}
