import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Info() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="./vlad.jpg" title="Как с нами связаться" BtnClass="hide" />
      <Footer />
    </>
  );
}

export default Info;
