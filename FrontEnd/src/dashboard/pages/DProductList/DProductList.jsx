import React from "react";
import "./DProductList.css";
import Topbar from "../../DashComponent/Topbar/Topbar";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function DProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
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
            <Link to={"/dashboard/Product" }>
              <button className="DproductListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="DproductListDelete"
              onClick={() => handleDelete(params.row.id)}
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
  );
}

export default DProductList;
