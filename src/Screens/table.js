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
      dispatch(saleorderAction(formvalues))
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

    if (loading) {
      return (
        <div className='d-flex justify-content-center'>
          <div>
            <div className="spinner-border text-primary" role="status"></div>
          </div>
          <h1>Loading...</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div className='d-flex flex-row mt-2 justify-content-center'>
          <h1>Something went wrong</h1>;
        </div>
      );
    }

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

  return (
    //<h1> the cname is {salesitems?.data?.["Data"]?.[0]?.cname}</h1>
    <>
    <Navbar title="VST TECHONOLOGIES" />
    

    <div>
    
    {data && data.length > 0 ? (
      <div>
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
      ) : (
        <h1>No data available</h1>
      )}  
  
  </div>
      </>
  )
}
