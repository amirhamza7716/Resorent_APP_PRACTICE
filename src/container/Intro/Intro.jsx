import React, { useState,useRef } from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons';
import {meal}from '../../constants';
import {BsPlayCircle} from "react-icons/bs";
import { BiPauseCircle } from "react-icons/bi";

import './Intro.css';

const Intro = () =>{
  const vidRef=useRef()
  const [playVideo,setplayVideo] =useState(false);
  const HandleVideo =()=>{
    setplayVideo((previousVideo)=>!previousVideo);
    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return (
    <div className='app__video'>
    <video 
    src={meal}
    ref={vidRef}
    type='video/mp4'
    loop 
    controls={false}
    muted
    />
    <div className='app__video-overlay flex__center'>
      <div 
      className='app__video-overlay_circle  flex__center'
      onClick={HandleVideo}
      >
        {playVideo ? <BiPauseCircle color='#fff' fontSize={30}/>:<BsPlayCircle color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>
  )
} 


export default Intro;
