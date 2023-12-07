import React from "react";
import "./UserList.css";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import Topbar from "../../DashComponent/Topbar/Topbar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../../dummyData";
import axios from "axios";

function UserList() {
  const [data, setData] = useState(null);
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/all", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
        },
      });
      const formattedData = response.data.map((row, index) => ({
        ...row,
        id: index + 1,
        phone: "123456",
      }));
      console.log(formattedData);
      setData(formattedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  // getUsers();
  // console.log("ss", data);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "phone",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
  ];

  return (
    <div className="homePage1">
      <Topbar />
      <div className="container3">
        <Sidebar />

        <div className="DashHome">
          {data && (
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          )}
        </div>
      </div>
    </div>
    // <div className='userList'>
    //   <div className='homePage1'>
    //   <Topbar/>
    //   <div className="container3">
    //   <Sidebar/>
    //
    // </div>
    // </div>
    // </div>
  );
}

export default UserList;
