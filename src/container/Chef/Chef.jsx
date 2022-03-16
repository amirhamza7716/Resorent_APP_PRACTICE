import React from 'react';
import {SubHeading} from '../../components'
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='Chef Word'/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>

        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="Quote"/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem labore hic doloremque amet possimus totam dolorum qui.
         </p>
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem labore hic doloremque amet possimus totam dolorum qui.
        </p>

      </div>

      <div className='app__chef-sign'>
        <p className='app__chef-sign-name p__cormorant' >Kavin luo</p>
        <p className='p__opensans'> Chef & Founder</p>
        <img src={images.sign} alt="signature"/>
      </div>
    </div>
  </div>
);

export default Chef;
