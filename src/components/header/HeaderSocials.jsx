import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className ='header__socials'>
        <a href="https://linkedin.com/in/mabertha-berliana" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Maberthaab" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/mabertha.ab" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials