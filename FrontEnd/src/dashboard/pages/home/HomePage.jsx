import React from 'react'
import './HomePage.css'
import Topbar from '../../../component/Topbar/Topbar'
import Sidebar from '../../../component/Sidebar/Sidebar'

function Home() {
  
  return (
    <div className='homePage'>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <div className="other"> otherpage </div>   
      </div> 
    </div>
  )
}

export default Home