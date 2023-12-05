import FeaturedInfo from '../../../dashboard/DashComponent/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../DashComponent/WidgetLg/WidgetLg'
import NewUser from '../NewUser/NewUser'
import Product from '../Product/Product'
import  User  from '../User/User'
import UserList from '../UserList/UserList'
import DProductList from '../DProductList/DProductList'
import NewProduct from '../NewProducts/NewProduct'

import './DashHome.css'

function DashHome() {
  return (
    <div className='DashHome'>
      <FeaturedInfo/>
      <div className='homeWidgets'>
       <WidgetLg/>
      <div className="UserList">
      <UserList/>
      </div>
      <div className="NewUser">
      <NewUser/>
      </div>
      <div className="User">
      <User/>
      </div>
      <div className="Product">
        <Product/>
      </div>
      <div className="DproductList">
        <DProductList/>
      </div>
      <div className="NewProduct">
        <NewProduct/>
      </div>

      </div>
      
    </div>
  )
}

export default DashHome