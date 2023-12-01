import { useState } from "react";
import React from "react";
import axios from 'axios';
import './Authentication.css'
import login from '../../assets/login.svg'
import register from '../../assets/register.svg'
import google from '../../assets/google.svg'
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import CustomButton from '../../componenet/CustomButton'; 
function Authentication() {
    const [SignUpMode, setSignUpMode] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const SwitchMode = () =>{
        setSignUpMode(!SignUpMode)
    }
    const validatePassword1 = () => {
     
      const isValid = password.length >= 6;
      setPasswordError(isValid ? "" : "Password must be at least 6 characters");
    };
  
    const validateAll = () => {
      validateEmail();
      validatePassword();
    
      if (emailError === "" && passwordError === "") {
      }
    };
    const validateEmail = () => {
      // Add your email validation logic here
      // For example, a simple check for a valid email format
      const isValid = /\S+@\S+\.\S+/.test(email);
      setEmailError(isValid ? "" : "Invalid email address");
    };
    const validateEmail1 = () => {
      // Add your email validation logic here
      const isValid = /\S+@\S+\.\S+/.test(formData.email);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: isValid ? "" : "Invalid email address",
      }));
    };
   // Registration form state
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Registration form error state
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    checkbox: "",
  });
  // Validation functions
  const validateUsername = () => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      name: formData.name.trim() ? "" : "Username is required",
    }));
  };


  const validatePhone = () => {
    // Add your phone validation logic here
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      phone: formData.phone.trim() ? "" : "Phone is required",
    }));
  };
  const validatePassword = () => {
    // Add your password validation logic here
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      password: formData.password.length >= 6 ? "" : "Password must be at least 6 characters",
    }));
  };

  
const validateForm = () => {
  validateUsername();
  validateEmail();
  validatePassword();
  if (
    Object.values(formErrors).every((error) => !error) &&
    Object.values(formData).every((value) => value !== "")
  ) {
    signIn(); 
  }
};

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };
   
  const signUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/register', formData);
      console.log(response);
      if (response.data.success) {
        // Save token and user details to local storage
        localStorage.setItem('token', response.data.token);
        console.log("done");
      }
    } catch (error) {
      console.error('SignUp Error:', error.message);
      // Handle signup error here
    }
  };
  
  const signIn = async () => {
    try {
      console.log(email, password);
      const response = await axios.post('http://localhost:5000/user/login', { "email":email, "password":password });
      console.log('SignIn Response:', response.data);
      if (response.data.success) {
        // Save token and user details to local storage
        localStorage.setItem('token', response.data.token);
        console.log("done");
      }
    } catch (error) {
      console.error('SignIn Error:', error.message);
      // Handle signin error here
    }
  };
  const handleSignUp = () => {
    // validateAll();
    console.log("gg",emailError,passwordError);
    if (emailError === "" && passwordError === "") {
      console.log("dd");
      signUp();
    }
  };

  const handleSignIn = () => {
    // validateForm();
    console.log("tt");
    signIn();
    if (
      Object.values(formErrors).every((error) => !error) &&
      Object.values(formData).every((value) => value !== "")
    ) {
      console.log("fw");
    }
  };

  return (
    <div className={`container ${SignUpMode ? "sign-up-mode" : ""}`}>

    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in now</h2>

          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <label id="email-label">Email</label>
            <input
                type="email"
                spellCheck="false"
                id="email-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
            <small id="email-error">{emailError}</small>

          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <label id="password-label">Enter password</label>
            <input
                type="password"
                id="password-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword1}
              />
            <small id="password-error">{passwordError}</small>
          </div>
          <CustomButton type={"submit"} className={"btn"} onClick={handleSignIn} Name={"Sign in"}/>
          {/* <input
              type="button"
              value="sign in"
              className="btn solid"
              onClick={handleSignIn}
            /> */}
          <p className="social-text">you can also sign in with</p>
          <div className="social-media">
          <img src={google} className="imagee" alt="google" />
          <img src={facebook} className="imagee" alt="facebook" />
          <img src={linkedin} className="imagee" alt="linkedin" />
         <img src={twitter} className="imagee" alt="twitter" />
          </div>
        </form>
        
<form action="#" id="form" className="sign-up-form">
  <h2 className="title">Register</h2>
  <div className="input-field">
      <i className="fas fa-user"></i>
      <input
                type="text"
                placeholder="Name"
                id="username"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={validateUsername}
                required
              />
      <div className="error" id="username-error">{formErrors.name}</div>
  </div>
  <div className="input-field">
      <i className="fas fa-envelope"></i>
      <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateEmail1}
                required
              />
      <div className="error" id="email-error">{formErrors.email}</div>
  </div>
  <div className="input-field">
      <i className="fas fa-phone"></i>
      <input
                type="tel"
                placeholder="Phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={validatePhone}
                required
              />
      <div className="error" id="phone-error">{formErrors.phone}</div>
  </div>
  <div className="input-field">
      <i className="fas fa-lock"></i>
      <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePassword}
                required
              />
      <div className="error" id="password-error">{formErrors.password}</div>
  </div>
  <div>
  </div>

  <CustomButton type={"submit"} className={"btn"} onClick={handleSignUp} Name={"Sign up"}/>
 
  <p className="social-text">You can also sign up with</p>
  <div className="social-media">
              <img src={google} className="imagee" alt="google" />
          <img src={facebook} className="imagee" alt="facebook" />
          <img src={linkedin} className="imagee" alt="linkedin" />
         <img src={twitter} className="imagee" alt="twitter" />
  </div>
</form>
      </div>
    </div>

    <div className="panels-container">

      <div className="panel left-panel">
        <div className="content">

          <h3>Don't have an account</h3>
          <p>
            create new account
          </p>
          <CustomButton type={"submit"} className={"btn transparent"} id="sign-up-btn" onClick={SwitchMode} Name={"Sign up"}/>
            <p>or</p>
          <CustomButton  type={"submit"} className={"btn transparent"} id="go back" Name={"go back"} />
          
        </div>
        <img src={register} className="image" alt="register" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Have an account?</h3>
          <p>
            you can sign in
          </p>
          <CustomButton className={"btn transparent"} id="sign-in-btn" onClick={SwitchMode} Name={'sign in'}/>
           
          
        </div>
        <img src={login} className="image" alt="login" />
      </div>
    </div>
  </div>
  )
}

export default Authentication