import React from "react";
import { useState} from "react";
import '../checkout/Checkout.css';
import CustomInput from '../../componenet/input/CustomInput'
import CustomButon from '../../componenet/button/CustomButton'
function Checkout() {
    const [formData, setFormData] = useState({
        email: "",
        address: "",
        city: "",
        phone: "",
        note: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.email || !formData.email.includes("@")) {
          newErrors.email = "Please enter a valid email address";
        }
    
        if (!formData.phone || formData.phone.length !== 11) {
          newErrors.phone = "Please enter a valid 10-digit phone number";
        }
    
        setErrors(newErrors);
    
        // Return true if there are no errors, and the form is valid
        return Object.keys(newErrors).length === 0;
      };
    
      const handleInputChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log("Form submitted successfully:", formData);
        } else {
          console.log("Form has validation errors");
        }
      };
    
    return (
        <>
            <div className="container">
                <h1>Check out</h1>
                <p>fill your details</p>
              <div className="all">
                <div className="box">
                  <div className="box-content">
                    <div className="pp">
                    <p>Subtotal :</p>
                    <p>Shipping :</p>
                    <p>taxes :</p>
                    </div>
                    <p>total :</p>
                  </div>
                </div>
                <div className="form">

                    <div className="input-field">
                        <label htmlFor="email">Email :</label>
                        <div className="input-width">
                        <CustomInput
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address : </label>
                        <div className="input-width">
                            <CustomInput type="text"
                                placeholder=" enter your Address"
                                Name="Address" />
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="City">City : </label>
                        <div className="input-width">
                            <CustomInput type="text"
                                placeholder="enter your city"
                                Name="City" />
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Phone :</label>
                        <div className="input-width">
                        <CustomInput
            type="phone"
            placeholder="Enter your phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
                        </div>
                   
                    <div className="input-field">
                        <label htmlFor="note">Note :</label>
                        <div className="input-width">
                            <CustomInput type="text"
                                placeholder="enter your note"
                                Name="Note" />
                        </div>
                    </div>
                </div>
                <div className="Buttons">
                    <CustomButon Name="Pay Now" onClick={handleSubmit}/>
                    import CustomButon from '../../componenet/button/CustomButton'

                </div>
            </div>
            </div>
        </>
    )
}
export default Checkout;