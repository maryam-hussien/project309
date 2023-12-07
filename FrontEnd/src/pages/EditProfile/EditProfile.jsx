import React from 'react'
import image from "../../assets/profile/profile.jpg"
import Navbar from '../../componenet/Navbar/Navbar'
import Footer from '../../componenet/footer/Footer'
import CustomButton from '../../componenet/button/CustomButton'
import { Link } from 'react-router-dom'
import "./EditProfile.css"

const EditProfile = () => {
  return (
    <>
    <Navbar />
    <div className='Edprofile'>
      <div className='Edprofile-header'>
        <div className='Edprofile-img-box'>
        <img className='Edprofile-img' src={image}/>
        </div>
        
      </div>
      <div className='Edprofile-input-box'>
        <div className='Edprofile-input'>
          <p>Name : </p>
          <input type="text"  placeholder='please Enter Name'/>
        </div>
        <div className='Edprofile-input'>
          <p>Email : </p>
          <input type="email" placeholder='please Enter Email' />
        </div>
        <div className='Edprofile-input'>
          <p>Phone : </p>
          <input type="phone" placeholder='please Enter Phone'/>
        </div>
        <div className='Edprofile-input'>
          <p>Address : </p>
          <input type="address" placeholder='please Enter address'/>
        </div>
      </div>
      <div className='Edprofile-btns'>
        <CustomButton Name="Save" />
        <Link className='Edprofilebutton2' to={"/profile"}>
        <button className='Edprofilebutton2'>cancel</button>
         </Link>

      </div>
    </div>
    <Footer />
  </>
  )
}

export default EditProfile
