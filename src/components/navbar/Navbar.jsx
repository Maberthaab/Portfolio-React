import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/ai'

const navbar = () => {
  return (
    <nav>
        <a href='#'><AiOutlineHome /></a>
        <a href='#about'><AiOutlineUser /></a>
        <a href='#experience'><BiBook /></a>
        <a href='#contact'><AiOutlineHome /></a>
      </nav>
  )
}

export default navbar