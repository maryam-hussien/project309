import Navbar from './components/Navbar';
import './App.css';
import ProductList from './components/ProductList';
import ImageSlider from './components/ImageSlider';
import i from "../src/components/Images/Image-1.jpg";
import i2 from "../src/components/Images/Image-2.jpg";
const Slides=[i,i,i2]

const containerStyles={height:'40dvb'}

function Home() {
    return (
      <div className="Home">
        <Navbar/>
        <h1 className='welcome'>we fill your space with art</h1>
        <div style={containerStyles}>
        <ImageSlider Slides={Slides}/>
        </div>
         
         
         <ProductList/>
         
      </div>
    );
  }
  
  export default Home;
  