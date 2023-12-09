import React, { useState } from 'react';
import "./NewProduct.css";
import Topbar from '../../DashComponent/Topbar/Topbar';
import Sidebar from '../../DashComponent/Sidebar/Sidebar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    size: '',
  });



  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('type', productData.type);
      formData.append('price', productData.price);
      formData.append('description', productData.description);
      formData.append('size', productData.size);
       console.log(productData)
      console.log(formData);
  
      const response = await axios.post('http://localhost:5000/item/add', formData);
      console.log('Response:', response);

      if (response.data.success) {
        console.log("Product added successfully");
        alert("Product added successfully")
        navigate("/dashboard/DProductList");
      }
    } catch (error) {
      console.error('Add Product Error:', error.message);
      // Handle error here
    }
  }

  return (
    <div className='homePage1'>
      <Topbar />
      <div className="container3">
        <Sidebar />

        <div className='DashHome'>
          <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm" onSubmit={addProduct} encType="multipart/form-data">
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file"  name="file" />
              </div>
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="enter name" name="name" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Type</label>
                <input type="text" placeholder="enter type" name="type" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="enter price" name="price" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Describtion</label>
                <input type="text" placeholder="enter description" name="description" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Size</label>
                <input type="text" placeholder="enter size" name="size" onChange={handleChange} />
              </div>

              <button type="submit" className="addProductButton">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
