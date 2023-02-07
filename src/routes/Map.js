import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import MapText from '../components/MapText';
function Map() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="./twoHomes.jpg" title="Как нас найти" BtnClass="hide" />
      <MapText />
      <Footer />
    </>
  );
}

export default Map;
