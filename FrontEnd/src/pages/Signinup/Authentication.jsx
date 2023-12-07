import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import './Authentication.css'
import login from '../../assets/login.svg'
import register from '../../assets/register.svg'
import CustomButton from '../../componenet/button/CustomButton';
import CustomInput from "../../componenet/input/CustomInput";
import { useNavigate } from "react-router-dom";
function Authentication() {
  const [SignUpMode, setSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const SwitchMode = () => {
    setSignUpMode(!SignUpMode)
  }
  const goBack = () => {
    navigate("/")
  }
  const [isSubmit, setisSubmit] = useState(false)
  const validatePassword1 = () => {

    const isValid = password.length >= 6;
    setPasswordError(isValid ? "" : "Password must be at least 6 characters");
  };


  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? "" : "Invalid email address");
  };


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({ formData });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully", formData);

    } else {
      console.log("Form Errors:", formErrors);
    }
  }, [formErrors, isSubmit, formData]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setisSubmit(true)
    if (!values.name) {
      errors.name = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.passwordLength = "Password must be at least 6 characters";
    }

    return errors;
  };
  const validate1 = (data) => {
    const errors = {};
    const isValidEmail = /\S+@\S+\.\S+/.test(data.email);
    if (!isValidEmail) {
      errors.email = "Invalid email address";
    }

    const isValidPassword = data.password.length >= 6;
    if (!isValidPassword) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const signUp = async () => {
    try {
      console.log("gg", formData);
      const response = await axios.post('http://localhost:5000/user/register', formData);
      console.log(response);
      if (response.data.success) {
        // Save token and user details to local storage
        localStorage.setItem('token', "Bearer "+response.data.token);
        console.log("done");
        navigate("/")
      }
    } catch (error) {
      console.error('SignUp Error:', error.message);
      // Handle signup error here
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      if (response.data.status) {
        console.log('SignIn Response:', response.data);
        localStorage.setItem('token', "Bearer "+response.data.token);
        navigate("/")
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('SignIn Error:', error);
    }
  };




  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = validate(formData)
    setFormErrors(errors)
    console.log({
      formData,
      errors
    })
    if (Object.keys(errors).length === 0) {
      signUp()
    }
  };


  const handleSignIn = async (e) => {
    e.preventDefault();

    // Check if email and password are defined and not empty
    if (email && password) {
      const errors = validate1({ email, password });

      if (Object.keys(errors).length === 0) {
        try {
          await signIn({ email, password });
          console.log("Sign-in successful");
        } catch (error) {
          console.error('Sign-in Error:', error);
        }
      } else {
        console.log('Validation errors:', errors);
      }
    } else {
      console.error('Email and password must be provided');
    }
  };




  return (
    <div className={`container ${SignUpMode ? "sign-up-mode" : ""}`}>

      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in now</h2>


            <CustomInput
              type={"email"}
              spellCheck="false"
              placeholder={"Enter Email"}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <small className="email-error">{emailError}</small>




            <CustomInput
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword1}
            />
            <small className="password-error">{passwordError}</small>

            <CustomButton onClick={handleSignIn} Name="Sign in" />
          </form>

          <form action="#" id="form" className="sign-up-form">
            <h2 className="title">Register</h2>



            <CustomInput
              type="text"
              placeholder="Name"
              Name="name"
              value={formData.name}
              onChange={handleInputChange}

            />


            <div className="error" id="username-error">{formErrors.name}</div>



            <CustomInput
              type="text"
              placeholder="Email"
              Name="email"
              value={formData.email}
              onChange={handleInputChange}

            />
            <div className="error" id="email-error">{formErrors.email}</div>



            <CustomInput
              type="tel"
              placeholder={"Phone"}
              Name={"phone"}

              onChange={handleInputChange}
            />



            <CustomInput

              type="password"
              placeholder="Password"
              Name="password"
              value={formData.password}
              onChange={handleInputChange}

            />
            <div className="error" id="password-error">
              {formErrors.Password ? formErrors.password : formErrors.passwordLength}
            </div>


            <div>
            </div>
            <CustomButton onClick={handleSignUp} Name={"Sign up"} />
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
            <CustomButton onClick={SwitchMode} Name={"Sign up"} />
            <p>or</p>
            <CustomButton onClick={goBack} Name={"go back"} />

          </div>
          <img src={register} className="image" alt="register" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Have an account?</h3>

            <CustomButton onClick={SwitchMode} Name={'sign in'} />
            <p>or</p>
            <CustomButton Name={"go back"} onClick={goBack}/>
          </div>
          <img src={login} className="image" alt="login" />
        </div>
      </div>
    </div>
  )
}

export default Authentication