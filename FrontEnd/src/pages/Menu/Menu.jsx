import React from 'react'
import Navbar from '../../componenet/Navbar/Navbar';
import CustomInput from '../../componenet/input/CustomInput';
import SearchIcon from "@mui/icons-material/Search";
import "./Menu.css"
import ProductList from '../../componenet/ProductList/ProductList';
function Menu() {
  return (
    <>
      <Navbar />
      <div className="search-bar-container">
        <div className="input-wrapper">
          <SearchIcon id="search-icon" />
          <input
            placeholder="Type to search..."
            // value={input}
            // onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
        <ProductList />
    </>
  );
}

export default Menu