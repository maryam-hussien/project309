import FeaturedInfo from '../../../component/FeaturedInfo/FeaturedInfo'
import './DashHome.css'

function DashHome() {
  return (
    <div className='DashHome'>
      <FeaturedInfo/>
      <div className='homeWidgets'></div>
    </div>
  )
}

export default DashHome