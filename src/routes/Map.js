import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Map() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="./smallHome.jpg" title="Как нас найти" BtnClass="hide" />
      <Footer />
    </>
  );
}

export default Map;
