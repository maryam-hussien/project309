import React from "react";
import "./Profile.css";
import image from "../../assets/profile/profile.jpg";
import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
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
      <Footer />
    </>
  );
};
export default Profile;
