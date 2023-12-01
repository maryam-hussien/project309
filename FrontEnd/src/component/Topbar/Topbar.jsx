import '../Topbar/topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import profileImg from '../../../src/assets/profile/profile.jpg';


function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"> Donia Essam</span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <SettingsIcon/>
                </div>
                <img src={profileImg} alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar