import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

export default function Catalog() {

 return (
  <div className='catalog-main-container'>
   <ul>
    <Link to='/book-info'>
     <li>
      <img src='/assets/book-placeholder.svg' />
     </li>
    </Link>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>
    <li>
     <img src='/assets/book-placeholder.svg' />
    </li>

   </ul>

  </div>
 )
}