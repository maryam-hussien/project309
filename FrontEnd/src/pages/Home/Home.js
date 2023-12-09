
import '../../componenet/Navbar/Navbar.css'
import ProductList from '../../componenet/ProductList/ProductList';
import ImageSlider from '../../componenet/ImageSlider/ImageSlider';

import Details from '../../pages/Details/Details'

import Navbar from "../../componenet/Navbar/Navbar";
import Footer from "../../componenet/footer/Footer";




function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <h1 className='welcome'>we fill your space with art</h1>
        <div>
          <ImageSlider />
        </div>
        <ProductList />
        <Details />

      </div>
      <Footer />
    </>);
}

export default Home;
