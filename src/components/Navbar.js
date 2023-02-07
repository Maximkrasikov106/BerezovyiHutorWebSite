import './NavbarStyles.css';

import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Берёзовый Хутор</h1>

        <Link to="" className="" onClick={closeMobileMenu}></Link>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-sharp fa-solid fa-house-chimney"></i>
              Главная
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-address-card"></i>О нас
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown drop="about" />}
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-map"></i>
              Как нас найти
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-circle-info"></i>
              Как с нами связаться
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-hand-holding-hand"></i>
              Услуги
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
            <Link to="/accommodation" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-bed"></i>
              Проживание
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

// class Navbar extends Component {
//   state = { clicked: false };
//   handClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">Берёзовый Хутор</h1>

//         <div className="menu-icons" onClick={this.handClick}>
//           <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
//         </div>

//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link className={item.cName} to={item.url}>
//                   <i className={item.icon}></i>
//                   {item.title}
//                   <i className={item.arrow}></i>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     );
//   }
// }

export default Navbar;
