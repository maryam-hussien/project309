import {Routes, Route } from "react-router-dom";
import "./App.css";
 import Home from "./dashboard/pages/home/Home";
 import Home1 from "./pages/Home/Home";
 import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";
function App() {
  return (
    <div className="App">
      
      <Routes >
      <Route path="/" element={<Home1 />}/>
         <Route path="/cart/checkout" element={<Checkout />}/>
        <Route path="/auth" element={<Authentication />}/>
        <Route path="/dashboard/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;