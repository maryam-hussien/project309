import React from "react";
import "./NewProduct.css";
import Topbar from "../../DashComponent/Topbar/Topbar";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import axios from "axios";

function NewProduct() {
  const addProduct = async () => {
    try {
      const response = await axios.post("http://localhost:5000/item/add", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
        },
      });
      console.log(response);
    } catch (error) {}
  };
  return (
    <div className="homePage1">
      <Topbar />
      <div className="container3">
        <Sidebar />
        <div className="DashHome">
          <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
              </div>
              <div className="addProductItem">
                <label>Stock</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button className="addProductButton" onClick={addProduct}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
