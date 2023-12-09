import React from 'react'
import image from "../../assets/profile/profile.jpg"
import Navbar from '../../componenet/Navbar/Navbar'
import Footer from '../../componenet/footer/Footer'
import CustomButton from '../../componenet/button/CustomButton'
import { Link } from 'react-router-dom'
import "./EditProfile.css"
import axios from "axios";
import { useState , useEffect} from "react";


const EditProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/find", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
        },
      });
    } catch (error) {
      console.error('SignIn Error:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
      try {
        const response = axios.put('http://localhost:5000/user/edit', userData, {
          headers: {
            "Content-Type": "application/json",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmY0NzcxYTYzYTg2YzBmMzM0MTlkZCIsImlhdCI6MTcwMTc5MTYwMiwiZXhwIjoxNzA0MzgzNjAyfQ.A8EKX1v2FCxaKLVO46D4Lp3KrHFksnMaDOzhI3a-9yY",
          },
        });
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
  return (
    <>
    <Navbar />
    <div className='Edprofile'>
      <div className='Edprofile-header'>
        <div className='Edprofile-img-box'>
          <img className='Edprofile-img' src={image} alt="Profile" />
        </div>
      </div>
      <div className='Edprofile-input-box'>
        <div className='Edprofile-input'>
          <p>Name : </p>
          <input
            type="text"
            placeholder='Please enter Name'
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className='Edprofile-input'>
          <p>Phone : </p>
          <input
            type="phone"
            placeholder='Please enter Phone'
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='Edprofile-input'>
          <p>Address : </p>
          <input
            type="text"
            placeholder='Please enter Address'
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='Edprofile-btns'>
        <CustomButton Name="Save" onClick={handleSave} />
        <Link className='Edprofilebutton2' to={"/profile"}>
          <button className='Edprofilebutton2'>Cancel</button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);
};

export default EditProfile
