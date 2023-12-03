import {Routes, Route } from "react-router-dom";
// import "./App.css";
 import HomePage from "./dashboard/pages/home/HomePage";
 import Home1 from "./pages/Home&Ditails/Home";
 import Authentication from "./pages/Signinup/Authentication";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <HomePage/>
       <Routes >
      <Route path="/" element={<Home1 />}/>
        <Route path="/" element={<Checkout />}/>
       <Route path="/" element={<Authentication />}/>
        <Route path="/dashboard/home" element={<HomePage />}/>
      </Routes>  
    </div>
  );
}

export default App;