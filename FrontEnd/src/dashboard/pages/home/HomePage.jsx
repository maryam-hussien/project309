import React from 'react'
import './HomePage.css'
import Topbar from '../../DashComponent/Topbar/Topbar'
import Sidebar from '../../DashComponent/Sidebar/Sidebar'
import FeaturedInfo from '../../DashComponent/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../DashComponent/WidgetLg/WidgetLg'


function Home() {
  
  return (
    <div className='homePage1'>
      <Topbar/>
      <div className="container3">
      <Sidebar/>
      
      
      <div className='DashHome'>
      <FeaturedInfo/>
      <div className='homeWidgets'>
       <WidgetLg/>
      {/* <div className="UserList">
      <UserList/>
      </div>
      <div className="NewUser">
      <NewUser/>
      </div>
      <div className="User">
      <User/>
      </div>
      <div className="Product">
        <Product/>
      </div>
      <div className="DproductList">
        <DProductList/>
      </div>
      <div className="NewProduct">
        <NewProduct/>
      </div> */}

      </div>
      </div> 
    </div>
    </div>
  )
}

export default Home