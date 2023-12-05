import {Routes, Route } from "react-router-dom";
 import Home from "./pages/Home/Home";
 import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";
import "./app.css"
function App() {
  return (
    <div className="App">
       <Routes >
      <Route path="/" element={<Home />}/>
         <Route path="/cart/checkout" element={<Checkout />}/>
        <Route path="/auth" element={<Authentication />}/>
      </Routes>
    </div>
  );
}

export default App;