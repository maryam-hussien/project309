import React from "react";
import "./DProductList.css";
import Topbar from "../../DashComponent/Topbar/Topbar";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

function DProductList() {
  const [data, setData] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/item/all");
      console.log(response.data);
      const formattedData = response.data.map((row, index) => ({
        ...row,
        id: index + 1,
        phone: "123456",
      }));
      console.log(formattedData);
      setData(formattedData);
      
    }catch(error){
      console.error('product Error:', error.message);
    };
    }
    const handleDelete = async (id) => {
      try {
        console.log(id);
        const response = await axios.delete(`http://localhost:5000/item/delete/${id}`);
        if (response.data.success) {
          console.log("Product deleted successfully:", response.data);
          alert("Product deleted successfully")
          setData(data.filter((item) => item.id !== id));
        } else {
          console.error("Product deletion failed:", response.data.message);
        }
      } catch (error) {
        console.error('Product Error:', error.message);
      }
    };
    
  useEffect(() => {
    getProducts();
  }, [data]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
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
    { field: "type", headerName: "type", width: 200 },
    {
      field: "size",
      headerName: "size",
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
            <Link to={`/dashboard/product/${params.row._id}` }>
              <button className="DproductListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="DproductListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="homePage1">
      <Topbar />
      <div className="container3">
        <Sidebar />

        <div className="DashHome">
          <div className="DproductList">
            {data && <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DProductList;
