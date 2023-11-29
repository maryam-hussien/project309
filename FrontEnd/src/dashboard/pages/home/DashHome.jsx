import FeaturedInfo from '../../DashComponent/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../DashComponent/WidgetLg/WidgetLg'
import './DashHome.css'

function DashHome() {
  return (
    <div className='DashHome'>
      <FeaturedInfo/>
      <div className='homeWidgets'>
       <WidgetLg/>
      </div>
    </div>
  )
}

export default DashHome