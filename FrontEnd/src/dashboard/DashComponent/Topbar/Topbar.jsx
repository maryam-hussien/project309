import '../Topbar/topbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import profileImg from '../../../assets/profile/profile.jpg';
import { Link } from "react-router-dom";



function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"> Donia Essam</span>
            </div>
            <div className="topRight">
            
                <div className="topbarIconsContainer">
                <Link to="/dashboard/user/:userId">
                    <SettingsIcon/>
                    </Link>
                </div>
                <Link to="/Profile">
                <img src={profileImg} alt="" className="topAvatar" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar