
import React from 'react'
import './OrderList.css'
import Topbar from '../../DashComponent/Topbar/Topbar'
import Sidebar from '../../DashComponent/Sidebar/Sidebar'
import { DataGrid} from '@mui/x-data-grid';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";


function DProductList() {
    const [data, setData] = useState(productRows);

    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/order/all", {
          headers: {
            "Content-Type": "application/json",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
          },
        });
      }catch(error){
        console.error('product Error:', error.message);
      };
      }

      const handleDelete = async(id) => {
        try{
          const response = axios.delete(`http://localhost:5000/order/delete/${id}`)
          
        if(response.data.success){
          console.log("order deleted successfully:", response.data);
          setData(data.filter((item) => item.id !== id));
            // Redirect or handle the deleted state as needed
          } 
      }catch(error){
        console.error('product Error:', error.message);
      };
      }
      useEffect(() => {
        getOrders();
      }, []);
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "order",
        headerName: "Order",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="DproductListItem">
              <img className="DproductListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "stock", headerName: "Stock", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link >
                <button className="DproductListAccept">Accept</button>
              </Link>
                            <Link >
                <button onClick={() => handleDelete(params.row.id)} className="DproductListCancel">Cancel</button>
              </Link>

            </>
          );
        },
      },
    ];
  return (
    <div className='homePage1'>
    <Topbar/>
    <div className="container3">
    <Sidebar/>
    
    
    <div className='DashHome'>

    <div className="DproductList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div> 
    </div> 
    </div> 
    </div> 
     )
}

export default DProductList