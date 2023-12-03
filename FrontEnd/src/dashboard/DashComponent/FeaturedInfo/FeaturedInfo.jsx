import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className='featuredTitle'>Order</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">16</span>
          <span className="featuredMoneyRate">order  </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4.830</span>
          <span className="featuredMoneyRate">-1.4 <ArrowDownwardIcon className='featuredIcon negative'/> </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Client</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">205</span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  )
}

export default FeaturedInfo