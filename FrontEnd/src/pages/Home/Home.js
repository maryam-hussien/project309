import Navbar from '../../componenet/Navbar/Navbar';
import Footer from '../../componenet/footer/Footer';
import '../../componenet/Navbar/Navbar.css'
import ProductList from '../../componenet/ProductList/ProductList';
import ImageSlider from '../../componenet/ImageSlider/ImageSlider';
import i from "../../assets/Images/Image-1.jpg";
import Details from '../../pages/Details/Details'
import i2 from "../../assets/Images/Image-2.jpg";
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
         <Details />
         <Footer />
      </div>
    );
  }
  
  export default Home;
  