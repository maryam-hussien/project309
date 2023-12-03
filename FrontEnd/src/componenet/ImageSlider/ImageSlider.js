import { useState } from "react";
import i from "../Images/Image-1.jpg"
import i2 from "../Images/Image-2.jpg"
import './ImageSlider.css';
const ImageSlider =()=>{
    const Slides=[i,i,i2]
    const [currentIndex,setcurrentIndex]=useState(0);
    const slideStyles ={
        borderRadius:"10px",
        width:'100%',
        backgroundSize:"cover",
        display:'flex',
    }
   
    const slideStyles1 ={
    
      width:'90%',
        height:'49vh',
        top: '40px',
        overflow:'hidden',
        justifyContent:'center' ,
        position:'relative',
        display:'flex',
          borderRadius:"10px",
     
          backgroundSize:"cover",
          backgroundImage: `url(${Slides[currentIndex]})`,
      }
    
    const handleLeftArrowClick = () => {
        setcurrentIndex((prevIndex) => (prevIndex === 0 ? Slides.length - 1 : prevIndex - 1));
      };
    
      const handleRightArrowClick = () => {
        setcurrentIndex((prevIndex) => (prevIndex === Slides.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <>
          <div className="welcome"></div>
    
          <div style={slideStyles}>
          <div className="leftArrowStyles" onClick={handleLeftArrowClick}>
              &#9665;
            </div>
            <div style={slideStyles1}></div>
           
            <div className="RightArowStyles" onClick={handleRightArrowClick}>
              &#9655;
            </div>
          </div>
        </>
      );
    };
export default ImageSlider;