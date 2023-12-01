import '../Sidebar/sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <LineStyleIcon/>
                        Home
                    </li>
                    <li className="sidebarlistItem">
                        <TimelineIcon/>
                        Analytics
                    </li>
                    <li className="sidebarlistItem">
                        <TrendingUpIcon/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarlistItem active">
                        <LineStyleIcon/>
                        Home
                    </li>
                    <li className="sidebarlistItem">
                        <TimelineIcon/>
                        Analytics
                    </li>
                    <li className="sidebarlistItem">
                        <TrendingUpIcon/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar