import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Mabertha</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#certificate'>Certificate</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://linkedin.com/in/mabertha-berliana'><BsLinkedin/></a>
        <a href='https://instagram.com/mabertha.ab'><FiInstagram /></a>
        <a href='https://github.com/Maberthaab'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio Me </small>

      </div>
    </footer>
  )
}

export default Footer