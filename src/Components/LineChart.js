import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Chart as ChartJS,LineElement, CategoryScale, LinearScale,PointElement,Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { mgmtsaleAction } from "../Actions/mgmtsaleAction";

ChartJS.register(LineElement,CategoryScale,LinearScale,Tooltip,PointElement)

const LineChart = () => {
    
    const [chart,setChart] = useState([])
    const mgsaledata = useSelector(state=> state.mgmtsaledata)
  const {sloading,data,isdataloaded,serror} = mgsaledata;
    const dispatch = useDispatch()
    const [mgsalevalues,setMgsalevalues] = useState({
    fdate:'12-01-2022',
    tdate:'12-02-2022'
  })
    useEffect(()=>{
        // const fetchCoins = async () => {
        //     await fetch(`${proxyUrl}${baseUrl}`,{
        //         method:'GET',
        //         headers:{
        //             'Content-Type':'application/json',
        //             'x-access-token': `${apiKey}`,
        //             'Access-Control-Allow-Origin':'*'
        //         }
        //     }).then((response)=>{
        //         response.json().then((data)=>{
        //             console.log(data)
        //             setChart(data.data)
        //         })
        //     }).catch((error)=>console.log(error))
        // }
        // fetchCoins()
        dispatch(mgmtsaleAction(mgsalevalues));
    },[dispatch])
    
    /*const   data={
        labels: chart?.coins?.map(x=>x.name),
        datasets: [{
          label: `${chart?.coins?.length} Coins Available`,
          data: chart?.coins?.map(x=>x.price),
          borderWidth: 1,
          backgroundColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          borderColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        }]
    }*/
    const options = {
        maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend:{
            fontSize:26
        }
      }
  return (
    <div>
      {/* <Line height={300} options={options} data={data}/> */}
    </div>
  )
}

export default LineChart