import React from "react";
import "./Profile.css";
import image from "../../assets/profile/profile.jpg";
import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
import CustomButton from "../../componenet/button/CustomButton";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-img-box">
            <img className="profile-img" src={image} />
          </div>
          <div className="profile-header-text">
            <p>maryam hussien</p>
          </div>
        </div>
        <div className="profile-input-box">
          <div className="profile-input">
            <p>UserName : </p>
            <input type="text" value={"maryam"} />
          </div>
          <div className="profile-input">
            <p>Email : </p>
            <input type="email" value={"maryam@m.com"} />
          </div>
          <div className="profile-input">
            <p>Phone : </p>
            <input type="phone" value={"123456"} />
          </div>
          <div className="profile-input">
            <p>Address : </p>
            <input type="address" value={"maryam"} />
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
