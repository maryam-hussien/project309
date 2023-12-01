import React, { useState } from "react";
import "./Cart.css";
import placeholderImage from "../../assets/profile/profile.jpg";
import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/")
  }

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 20.0, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1 },
    { id: 3, name: "Product 3", price: 25.0, quantity: 3 },
  ]);

  const removeItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

 
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-info">
              <img src={placeholderImage} alt={`Product ${item.id}`} />
              <div className="item-details">
                <span className="product-name">{item.name}</span>
                <span className="product-price">${item.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="quantity">
              <span>Quantity:</span>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10))
                }
              />
            </div>
            <div className ="delete-button">
            <DeleteOutlineIcon
              onClick={() => removeItem(item.id)}
            />
            </div>
            
          </div>
        ))}

        <div className="total-price">
          <span>Total:</span>
          <span>${getTotalPrice()}</span>
        </div>
      
        <div className="checkout-button-container">
  <button className="goback-button"  onClick={goBack} >Go back</button>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
