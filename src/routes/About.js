import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./modalHome.jpg"
        title="Подробная информация"
        BtnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
