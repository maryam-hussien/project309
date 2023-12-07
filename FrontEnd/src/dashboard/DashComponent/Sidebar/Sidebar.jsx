import "../Sidebar/sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/home">
              <li className="sidebarlistItem active">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/users">
              <li className="sidebarlistItem">
                <PersonIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/dashboard/DProductList">
              <li className="sidebarlistItem">
                <Inventory2Icon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/dashboard/orderList">
              <li className="sidebarlistItem">
                <LocalMallIcon className="sidebarIcon" />
                Orders
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/newproduct">
              <li className="sidebarlistItem">
                <ShoppingBagIcon className="sidebarIcon" />
                Add product
              </li>
            </Link>
            <Link to="/dashboard/user/:userId">
              <li className="sidebarlistItem">
                <ShoppingBagIcon className="sidebarIcon" />
                Setting
              </li>
            </Link>
            <li className="log-out">
              <button> Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
