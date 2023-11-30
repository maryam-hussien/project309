import {Routes, Route } from "react-router-dom";
import "./App.css";
 import Home from "./dashboard/pages/home/Home";
import Authentication from "./pages/Signinup/Authentication";

function App() {
  return (
    <div className="App">
      
      <Routes >
        <Route path="/" element={<Authentication />}/>
        <Route path="/dashboard/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
