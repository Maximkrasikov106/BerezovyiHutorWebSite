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
        title="На этой странице вы можете подробнее узнать о нас"
        BtnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
