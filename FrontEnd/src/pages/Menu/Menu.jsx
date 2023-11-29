import React from 'react'
import "./Menu.css"
import "../../componenet/input/CustomInput"
//import CustomInput from '../../componenet/input/CustomInput';

const Menu = () => {
  return (
    <>
    <div className='menu'>
        <div className='search'>
      
          <h1 className='text'>Gallery</h1>
          <div className='Search-box'>
          <input className="input" placeholder="Search" name="Search"/>

     
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Menu