import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ConnectWe from '../components/connectWe';

function Info() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="./oldHome.jpg" title="Как с нами связаться" BtnClass="hide" />
      <ConnectWe />
      <Footer />
    </>
  );
}

export default Info;
