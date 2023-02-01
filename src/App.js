import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login'


function App() {
  // const tk = localStorage.getItem("token");

  // if (!tk) {
  //   return <Home />
  // }

  return (
    <div className='page-container'>
      <div className='content-wrap'>

        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/marketing' element={<Marketing />} />
            <Route path='/consulting' element={<Consulting />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
