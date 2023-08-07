import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import '../App.css'

const Footer = () => {
  return (
    <div className='footer'>
      CopyRight 2023 @<Link to='/about'>About me</Link>
    </div>
  )
}

export default Footer
