import React, { Component } from 'react';
import './index.css';
import logo from './Logo.png'
export default class index extends Component {
  render() {
    return (
      <header className='header'>
        <div className='banner-black'>1</div>
        <img className='logo' src={logo} alt="Logo" />
      </header>
    )
  }
}
