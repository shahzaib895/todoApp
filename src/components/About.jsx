import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const About = () => {
  return (
    <div className='about-page'>
      About
      <Link to='/'>Reuturn to home</Link>
    </div>
  )
}

export default About
