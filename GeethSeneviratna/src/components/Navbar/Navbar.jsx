
import React, { useRef } from 'react';
import { Link } from 'react-scroll';  // Import the Link component from react-scroll
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }


  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li><Link className="anchor-link" to="home"  smooth={true} duration={500}offset={-50}><p>Home</p></Link></li>

        <li><Link className="anchor-link" to="about" smooth={true} duration={500}offset={-50}><p>About Me</p></Link></li>

        <li><Link className="anchor-link" to="services" smooth={true} duration={500}offset={-50}><p>Services</p></Link></li>
        
        <li><Link className="anchor-link" to="work" smooth={true} duration={500}offset={-50}><p>Portfolio</p></Link></li>

        <li><Link className="anchor-link" to="contact" smooth={true} duration={500}offset={-50}><p>Contact</p></Link></li>
      </ul>

      
      <Link className="nav-contact" to="contact" smooth={true} duration={500}offset={-50}>Connect with Me</Link>
    </div>
  );
};

export default Navbar;
