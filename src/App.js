import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container flex-grow-1 ">
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
