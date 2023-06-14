import React, { useEffect, useState } from "react";
import { saleorderAction } from "../Actions/saleorderAction";
import { useDispatch, useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import { tableCustomStyles } from '../Components/tablestyle';
import Navbar from "../Components/Navbar";


export default function Ttable() {
  const [searchText, setSearchText] = useState('');
  const salesitems = useSelector(state=> state.salesorder)
  const {loading,data,error} = salesitems;
  const [formvalues,setFormvalues] = useState({
    ccode:'700',
    tdate:'12-27-2022',
    rcode:'24'
  })
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(saleorderAction(formvalues)).then(() => {
        if(salesitems===null)
        {
          console.log('sales item null hence we can show progressbar')
        }
        else{
         
            //alert('Unable to Login, Please Check Credentials!')
        }
      })
      .catch((error) => {
        alert(error)
      });
    }, [dispatch]);
    const columns=[
      {
        name:'ITEMNAME',
      selector:row=>row.ITEMNAME,
      sortable:true,
      width:"220px"
      },
      {
        name:'PKGUNIT',
      selector:row=>row.PKGUNIT,
      width:"80px"
      },
      {
        name:'LTR_UNIT',
      selector:row=>row.LTR_UNIT,
      width:"70px"
      },
      {
        name:'RATE',
      selector:row=>row.RATE,
      width:"80px"
      },
      {
        name:'CATID',
      selector:row=>row.CATID,
      width:"60px"
      },
      {
        name:'ISBYPRODUCT',
      selector:row=>row.ISBYPRODUCT,
      width:"100px"
      }
      ,
      {
        name:'TUBISSUE',
      selector:row=>row.TUBISSUE,
      width:"80px"
      },
      {
        name:'SCHEME',
      selector:row=>row.SCHEME,
      width:"80px"
      },
      {
        name:'CGST',
      selector:row=>row.CGST,
      width:"60px"
      },
      {
        name:'SGST',
      selector:row=>row.SGST,
      width:"60px"
      },
      {
        name:'IGST',
      selector:row=>row.IGST,
      width:"60px"
      },
      {
        name:'TAXRATE',
      selector:row=>row.TAXRATE,
      width:"80px"
      }
      ,
      {
        name:'TAXAMOUNT',
      selector:row=>row.TAXAMOUNT,
      width:"100px"
      },
      {
        name:'Edit',
      selector:row=><img src={require("../images/edit.png")}/>,
      }
    ];

    //const filteredItems = salesitems.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    const handleFilter = (event) =>{
      if(event.target.value==="")
      {
        
        return salesitems;
      } 
      else{
        console.log(event.target.value)
      }
        /*const newData = records.filter(row=>{
          return row.name.toLowerCase().includes(event.target.toLowerCase())
        })
        setRecords(newData)*/
    }
    /* const data =[
      {
        id:1,
        name:'vadluri saiteja',
        email:'saithej.13@gmail.com',
        age:'25'
      },
      {
        id:2,
        name:'vadluri',
        email:'sai.13@gmail.com',
        age:'24'
      },
      {
        id:3,
        name:'saiteja',
        email:'saithej@gmail.com',
        age:'23'
      },
      {
        id:4,
        name:'teja',
        email:'thej@gmail.com',
        age:'22'
      },
      {
        id:5,
        name:'sai',
        email:'sai@gmail.com',
        age:'21'
      }
    ];*/
  return (
    //<h1> the cname is {salesitems?.data?.["Data"]?.[0]?.cname}</h1>
    <>
    <Navbar title="VST TECHONOLOGIES" />
    

    <div>
      {/* <h1>HIIIIIIIIIIIIIIIIII{salesitems.data["data"][0]["ITEMNAME"]}</h1> */}
    <p>the sales data is {salesitems?.data?.["data"]?.[0].ITEMNAME}</p>
    <div className="container mt-5">
      <div className="text-end"><input type ="text" onChange={e => setSearchText(e.target.value)}/>
      <DataTable
      customStyles={tableCustomStyles}
      title="Sales Data"
      columns ={columns}
      data = {data}
      //data={filteredItems}
      //expandableRows
      //expandOnRowClicked //still we need to work on expandables 
      //expandableRowsComponent={"testtttttttttttttttttttttttttttttttttttttttttttt"}
      //data = {records}// if we want to filter the records we use this
      selectableRows
      fixedHeader
      dense
      // pagination //uses for paging the records to next pages
      ></DataTable>
</div>
    </div>
  
  </div>
      </>
  )
}
