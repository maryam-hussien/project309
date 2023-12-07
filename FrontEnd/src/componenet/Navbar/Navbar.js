import './Navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
function Navbar(){
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
        <PersonOutlinedIcon />
        <LocalMallOutlinedIcon />
        <button className='log'>login</button>
       </div>
      </div>
        
        </>
    )

}
export default Navbar;