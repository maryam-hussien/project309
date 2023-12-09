import React, { useState } from "react";
import "./Profile.css";
import image from "../../assets/profile/profile.jpg";
import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
import asset from '../../assets/profile/photo_2023-11-30_09-54-44.jpg'
import CustomButton from "../../componenet/button/CustomButton";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";



const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/find", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
        },
      });

      const { name, email, phone, address } = response.data;

      setUserData({
        name: name,
        email: email,
        phone: phone,
        address: address,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-img-box">
            <img className="profile-img" src={image} alt="Profile" />
          </div>
          <div className="profile-header-text">
            <p>{userData.name}</p>
          </div>
        </div>
        <div className="profile-input-box">
          <div className="profile-input">
            <p>UserName : </p>
            <input type="text" value={userData.name} readOnly />
          </div>
          <div className="profile-input">
            <p>Email : </p>
            <input type="email" value={userData.email} readOnly />
          </div>
          <div className="profile-input">
            <p>Phone : </p>
            <input type="phone" value={userData.phone} readOnly />
          </div>
          <div className="profile-input">
            <p>Address : </p>
            <input type="text" value={userData.address} readOnly />
          </div>
        </div>
        <div className="profile-btns">
          <Link to={"/profile/edit"}>
            <CustomButton Name="Edit" />
          </Link>
          <Link to={"/"}>
            <button className="Profilebutton2">Cancel</button>
          </Link>
        </div>
      </div>
     
      <div className="order1">
        <div className="order2">
        <p>orders number :3</p>
      <p>Complete</p>
        </div>
      
      <div className="order-container">
          <div  className="order-item">
            <div className="product-info">
              <img src={asset} alt=""/>
              <div className="item-details">
                <span className="product-name">Floral Abstract</span>
                <span className="product-price">2450LE</span>
                <span>Quantity: 3</span>
                <p>Total: 2450LE</p>
        
              </div>
              <div className="star-icons">
              {[1, 2, 3, 4, 5].map((index) => (
                <Star
                  key={index}
                  onClick={() => yellow(index)}
                  style={{ color: index <= rating ? 'yellow' : 'inherit' }}
                  fontSize="10px"/>
              ))}
            </div>
            
            </div>
            
            </div>
            <div className="comment">
            <input  type="text" placeholder="your note"/>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};
export default Profile;
