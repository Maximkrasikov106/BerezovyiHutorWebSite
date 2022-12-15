import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Info from './routes/Info';
import About from './routes/About';
import Map from './routes/Map';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
