import React from 'react';
import { Link } from 'react-router-dom';
import './BookInfo.css';

export default function BookInfo() {

 return (

  <div className='book-info-main-container'>
   <div className='book-info-contents-container'>
    <ul>
     <li>
      <div className='book-container'>
       <img src='/assets/book-placeholder.svg' />
       <div className='book-info-container'>
        <h1>Title</h1>
        <h2>Author</h2>
        <p># available</p>
        <p>Summary</p>
       </div>
       <Link to='/edit-book'>
        <button className='edit-button'>Edit Book</button>
       </Link>
      </div>
     </li>
    </ul>

   </div>

  </div>

 )

}