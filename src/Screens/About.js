import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar";
import { mgmtsaleAction } from '../Actions/mgmtsaleAction';
import { PieChart } from "../Charts/PieChart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {  Line } from "react-chartjs-2";
import { LineChart } from '../Charts/LineChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      //bottom , top , left , right
      position: "top",
    },
  },
};


export default function About(props) {
  const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {loading,data,error} = mgsaledata;
  const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-05-2022'
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(mgmtsaleAction(mgsalevalues))
  }, [dispatch]);

  if (!data || !data.labels || !data.datasets) {
    return (<div>
      <div className="spinner-border text-primary" role="status"></div>
      <h1>Loading...</h1>
      </div>
      ) // Display a loading message while data is being fetched
  }

  return (
    <>
     <Navbar title="VST TECHONOLOGIES"/>
    <div className='container' >
        <h2 style={{color :props.colort}}>About us</h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    <div className='container my-5 mx-5' style={{ width: 600, height: 300 }}>
    {data.labels.length > 0 ? (
        <Line options={options} data={data}/>
      ) : (
        <h1>No data available</h1>
      )}
      {/* {
        loading ? <h1>Loading...</h1> : error ? <h1>Something Went wrong</h1> : <Line options={options} data={mgsaledata.data} />
      } */}
       
    </div>
    <div>
    {/* <PieChart/> */}
    </div>
    </>
  )
}
