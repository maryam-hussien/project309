import React from 'react'
import './HomePage.css'
import Topbar from '../../../component/Topbar/Topbar'
import Sidebar from '../../../component/Sidebar/Sidebar'
import DashHome from '../../../dashboard/pages/home/DashHome'

function Home() {
  
  return (
    <div className='homePage'>
      <Topbar/>
      <div className="container">
      <Sidebar/>
       <DashHome/>
      </div> 
    </div>
  )
}

export default Home