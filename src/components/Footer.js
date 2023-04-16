import React from 'react';
// FaGithub AiFillLinkedin AiOutlineInstagram 
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <h4> ©️ CopyRight 2023 <br/>Made by Hemant kumar </h4>
      <div className='icon-group'>
        <a href='https://www.instagram.com/hemant00000000/'><AiOutlineInstagram/></a>
        <a href='https://github.com/hemant0933'><AiFillLinkedin/></a>
        <a href='https://www.linkedin.com/in/hemant-kumar-0a9b69bb/'><FaGithub/></a>
      </div>
    </div>
  );
}

export default Footer;
