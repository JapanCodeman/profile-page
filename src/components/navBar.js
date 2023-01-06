import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-buttons'>
        <Link to="hero" activeClass="active" spy={true} smooth={true} className='navbar-button'>Home</Link>
        <Link to="certifications" spy={true} smooth={true} className='navbar-button'>About</Link>
        <Link to="projects" spy={true} smooth={true} className='navbar-button'>Projects</Link>
        <Link to="contact" spy={true} smooth={true} className='navbar-button'>Contact</Link>
      </div>
    </div>
  );
}
export default NavBar;

