import Footer from "./Footer";
import Contact from "./Contact";
import Slider from "./Slider";
import Banner from "./Banner";
import Prdctimg from './Prdctimg.js';
import Client from "./Client";
import Navbar from "./Navbar";
import "../style.css";

const Home = () => {



  return (

    <>
      <div className="main">
        <Navbar />
        <Slider />
        <Banner />
        <Prdctimg />
        <div className="testi_head">
          <h1>What Our Client Say About Us</h1>
        </div>
        <div className="client_info" id="client_user">
          <Client />
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Home;