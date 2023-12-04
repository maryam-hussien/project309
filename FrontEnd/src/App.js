import {Routes, Route } from "react-router-dom";
<<<<<<< HEAD
 import Home from "./dashboard/pages/home/DashHome";
=======
>>>>>>> bd0520c4b0b18482953917250c9de28da725591d
 import Home1 from "./pages/Home/Home";
 import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";
import "./app.css"
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
=======
>>>>>>> bd0520c4b0b18482953917250c9de28da725591d
       <Routes >
      <Route path="/" element={<Home1 />}/>
         <Route path="/cart/checkout" element={<Checkout />}/>
        <Route path="/auth" element={<Authentication />}/>
      </Routes>
    </div>
  );
}

export default App;