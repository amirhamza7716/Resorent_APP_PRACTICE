import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const[toggleMenu,settoggleMenu]=useState(false);
  
  return <nav className='app__navbar'>
    <div className='app__navbar-logo'>
     <img src={images.gericht} alt='Gericht'/>
    </div>
    {/* FullScreen View */}
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'> Home</a></li>
      <li className='p__opensans'><a href='#about'> About</a></li>
      <li className='p__opensans'><a href='#menu'> Menu</a></li>
      <li className='p__opensans'><a href='#award'> Award</a></li>
      <li className='p__opensans'><a href='#contect'> Contect</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Login | Register</a>
      <div/>
      <a href='/' className='p__opensans'> Book Table</a>
    </div>


    {/* Small Screen View*/}
    <div className='app__navbar-smallscreen'> 
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{settoggleMenu(true)}}/>
      
      
      {toggleMenu &&(
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>{settoggleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href='#home'> Home</a></li>
          <li className='p__opensans'><a href='#about'> About</a></li>
          <li className='p__opensans'><a href='#menu'> Menu</a></li>
          <li className='p__opensans'><a href='#award'> Award</a></li>
          <li className='p__opensans'><a href='#contect'> Contect</a></li>
        </ul>
      </div>
      )}
      
    </div>
  </nav>
};

export default Navbar;