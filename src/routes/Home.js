import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Midblock from '../components/Midblock';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./kek.jpg"
        title="УГРАДА РУЛЭЕТ"
        text="там где пиво, там хорошо"
        url="/"
        BtnClass="show"
        buttonText="ЗАКАЗАТЬ ШЛ.. нет ДОМ"
      />
      <Midblock />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
