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
        title="БЕРЁЗОВЫЙ ХУТОР"
        text="отдых для всей семьи"
        url="/"
        BtnClass="show"
        buttonText="ЗАБРОНИРОВАТЬ ДОМ"
      />
      <Midblock />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
