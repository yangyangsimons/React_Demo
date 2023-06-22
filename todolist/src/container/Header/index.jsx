import React from 'react';
import './index.css';
import logo from './Logo.png';


export default function Header() {
  return (
    <header className='header'>
        <div className="banner-black">
        </div>
        <img src={logo} alt="" className="logo" />
    </header>
  )
}
