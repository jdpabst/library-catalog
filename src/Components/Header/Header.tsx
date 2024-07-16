import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

 return (
  <div className='header-container'>
   <Link to='/'>
    <img src='/assets/logo.svg' />
   </Link>
  </div>
 )
}