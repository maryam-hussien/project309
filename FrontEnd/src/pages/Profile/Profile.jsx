import React, { useState } from "react";
import "./Profile.css";
import image from "../../assets/profile/profile.jpg";
import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
import asset from '../../assets/profile/photo_2023-11-30_09-54-44.jpg'
import CustomButton from "../../componenet/button/CustomButton";
import { Link } from "react-router-dom";
import { Star } from '@mui/icons-material';
const Profile = () => {
  const [rating, setRating] = useState(0);
  const yellow = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-img-box">
            <img className="profile-img" src={image}  alt=""/>
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
