import { Routes, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./dashboard/pages/home/HomePage";
import Home1 from "./pages/Home&Ditails/Home";
import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";
import UserList from "./dashboard/pages/UserList/UserList";
import OrderList from "./dashboard/pages/OrderList/OrderList";

import User from "./dashboard/pages/User/User";
// import NewUser from "./dashboard/pages/NewUser/NewUser";
import Product from "./dashboard/pages/Product/Product";
import NewProduct from "./dashboard/pages/NewProducts/NewProduct";
import DProductList from "./dashboard/pages/DProductList/DProductList";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/" element={<Checkout />} />
        <Route path="/" element={<Authentication />} />



        <Route path="/dashboard/home" element={<HomePage />} />
        <Route path="/dashboard/users" element={<UserList />} />
        <Route path="/dashboard/orderList" element={<OrderList />} />
        <Route path="/dashboard/DProductList" element={<DProductList />} />
        <Route path="/dashboard/user/:userId" element={<User />} />
        {/* <Route path="/dashboard/user/NewUser" element={<NewUser />} /> */}
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/product/:productId" element={<Product />} />
        <Route path="/dashboard/newproduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
