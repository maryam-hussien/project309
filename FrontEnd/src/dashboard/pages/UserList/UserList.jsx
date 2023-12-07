import React from "react";
import "./UserList.css";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import Topbar from "../../DashComponent/Topbar/Topbar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../../dummyData";

function UserList() {
  const getUsers = () => {};
  const [data, setData] = useState(userRows);

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
