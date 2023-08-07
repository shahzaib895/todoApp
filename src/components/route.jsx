import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About';
import App from '../App';

const route = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>   
    <Route path='/' Component={App}/>
    <Route path='/about' Component={About}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default route
