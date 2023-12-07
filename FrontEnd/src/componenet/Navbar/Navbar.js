import './Navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Navbar(){
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const getUser = () =>{
    setUser(localStorage.getItem("token")); 
  }
  useEffect(() => {
    getUser();
  }, [user])
  
  const auth =() => {
      navigate("/auth")
  }
    return(
        <>
      <div className='nav1'>
       <h1>Welcome to our store</h1>
      </div>
      
      <div className='nav2'>
        <div className='icon2'>
        <SearchOutlinedIcon />
        </div>
       <p>Archi-wood</p>
       <div className='icons'>
        {user ? <PersonOutlinedIcon /> :<button className='log' onClick={auth}>login</button>}
        <LocalMallOutlinedIcon />
       
       </div>
      </div>
        
        </>
    )

}
export default Navbar;