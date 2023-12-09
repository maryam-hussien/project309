import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import Sidebar from "../../DashComponent/Sidebar/Sidebar";
import Topbar from "../../DashComponent/Topbar/Topbar";
import PublishIcon from "@mui/icons-material/Publish";
import { useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    type: "",
    price: "",
    size: "",
    description: "",
    image: "",
  });

  const {productId} = useParams(); 
  const id = productId
  useEffect(() => {
    console.log(productId);
    axios.get(`http://localhost:5000/item/getById/${id}`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/item/edit/${id}`, productData)
      .then(response => {
        console.log("Product updated successfully:", response.data);
        alert("Product updated successfully")
        navigate("/dashboard/DProductList");
      })
      .catch(error => {
        console.error("Error updating product:", error);
      });
  };
  

  return (
    <div className="homePage1">
      <Topbar />
      <div className="container3">
        <Sidebar />

        <div className="DashHome">
          <div className="product">
           
            <div className="productBottom">
              <form className="productForm">
                <div className="productFormLeft">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Apple AirPod"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                  />
                  <label>Product type</label>
                  <input
                    type="text"
                    placeholder="Apple AirPod"
                    name="type"
                    value={productData.type}
                    onChange={handleChange}
                  />
                  <label>Product price</label>
                  <input
                    type="text"
                    placeholder="Apple AirPod"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                  />
                  <label>Product size</label>
                  <input
                    type="text"
                    placeholder="Apple AirPod"
                    name="size"
                    value={productData.size}
                    onChange={handleChange}
                  />
                  <label>Product description</label>
                  <input
                    type="text"
                    placeholder="Apple AirPod"
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                  <img
                      src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                      className="productUploadImg"
                    />
                    <label for="file">
                      <PublishIcon />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="productButton" onClick={(e) => handleUpdate(e)}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
