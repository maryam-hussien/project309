import { Routes, Route } from "react-router-dom";
import HomePage from "./dashboard/pages/home/HomePage";
import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";
import UserList from "./dashboard/pages/UserList/UserList";
import OrderList from "./dashboard/pages/OrderList/OrderList";
import Home from "./pages/Home/Home";
import User from "./dashboard/pages/User/User";
import Product from "./dashboard/pages/Product/Product";
import NewProduct from "./dashboard/pages/NewProducts/NewProduct";
import DProductList from "./dashboard/pages/DProductList/DProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/dashboard/home" element={<HomePage />} />
        <Route path="/dashboard/users" element={<UserList />} />
        <Route path="/dashboard/orderList" element={<OrderList />} />
        <Route path="/dashboard/DProductList" element={<DProductList />} />
        <Route path="/dashboard/user/:userId" element={<User />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/product/:productId" element={<Product />} />
        <Route path="/dashboard/newproduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
