import React from 'react'
import './HomePage.css'
import Topbar from '../../DashComponent/Topbar/Topbar'
import Sidebar from '../../DashComponent/Sidebar/Sidebar'
import DashHome from '../../../dashboard/pages/home/DashHome'


function Home() {
  
  return (
    <div className='homePage1'>
      <Topbar/>
      <div className="container3">
      <Sidebar/>
       <DashHome/>
      </div> 
    </div>
  )
}

export default Home