import '../Sidebar/sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarlistItem active">
                        <HomeIcon className="sidebarIcon" />
                        Home
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <PersonIcon className="sidebarIcon" />
                        Users
                    </li>
                    <li className="sidebarlistItem">
                        <Inventory2Icon className='sidebarIcon' />
                        Products
                    </li>
                    <li className="sidebarlistItem">
                        <LocalMallIcon className="sidebarIcon"/>
                        Orders
                    </li>
                </ul>
            </div>
            
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">setting</h3>
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <ShoppingBagIcon className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="log-out">
                        <a href="st" >
                            <LogoutIcon/>
                                <p>Log Out</p>

                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar