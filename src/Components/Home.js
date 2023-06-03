import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "./Navbar";
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
} from "recharts";
import { mgmtmilkAction } from '../Actions/mgmtmilkAction';



export default function Home(props,{ isLoggedIn }) {
  const mgmilkdata = useSelector(state=> state.mgmtmilkdata)
  const {loading,error} = mgmilkdata;
  const [formvalues,setFormvalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-02-2022'
  })
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(mgmtmilkAction(formvalues))
      console.log(mgmilkdata?.data?.["data"]?.length)
      console.log(transformedData);
    }, [dispatch]);
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
  const gdata = [
    { name: "BHONGIRI", qty: 4319 },
    { name: "INDIRA NAGAR", qty: 2034 },
    { name: "JANAGAM", qty: 3015 },
    {name:"NANGUNOOR",qty:3262},
    {name:"VANTI MAMIDI",qty:4564},
    { name:"VEMULAWADA",qty:2254}
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
    <>
        <Navbar title="VST TECHONOLOGIES" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          {/* <label HtmlFor="exampleFormControlTextarea1" className="form-label">{text}</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          <div className="container mx-3 my-3">
            <button className="btn btn-primary" onClick={handleclick}>To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleclicklo}>To Lowecase</button>
            <div style={{ color: props.colort }}>
              <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="d-flex justify-content-center">
<div className="d-flex align-items-center">
        <PieChart width={400} height={400}> 
           <Pie
            dataKey="qty"
            isAnimationActive={true}
            data={transformedData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#042743"
            label="ttt"
          />
          <Tooltip />
        </PieChart> 

        <div className="d-flex align-items-center">

        <BarChart width={500} height={300} data={transformedData} margin={{
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
        </div>
        </div>
    </>
  )
}
