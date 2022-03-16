import React from 'react';


import { FaFacebook,FaInstagram ,FaTwitter} from "react-icons/fa";
import {FooterOverlay} from '../../components';
import Newsletter from '../../components/Footer/Newsletter';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>

      <div className='app__footer-links_contect'>
        <h1 className='app__footer-links_contect-headtext'>Context Us</h1>
        <p className='p__opensans'>pakistan,Gujranwala,Nowshera virkan</p>
        <p className='p__opensans'>+923057725224</p>
        <p className='p__opensans'>+923058332160</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="Gericht"/>
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others  </p>
        <img src={images.spoon} alt="spoonImg" className='spoon__img' style={{marginTop:'15px'}}/>
        <div className='app__footer-links_logo-icons'>
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
        </div>

      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-links_work-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday to Friday</p>
        <p className='p__opensans'>04:00 am , 12:00 am</p>
        <p className='p__opensans'>Saturday to Sunday</p>
        <p className='p__opensans'>07:00 am , 11:00 am</p>
      </div>
    </div>

    <div className='app__footer-copyright'>
      <p className='p__opensans'>2021 Gericht . All right reserved</p>
    </div>
  </div>
);

export default Footer;
