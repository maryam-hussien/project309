import '../Topbar/topbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import profileImg from '../../../assets/profile/profile.jpg';


function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"> Donia Essam</span>
            </div>
            <div className="topRight">
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