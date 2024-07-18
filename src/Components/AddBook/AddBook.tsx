import React from "react";
import './AddBook.css';

export default function AddBook() {
 return (
  <div className='add-book-main-container'>
   <div className='add-book-info-container'>
    <img src='/assets/book-placeholder.svg' />
    <div className='add-book-info'>
     <input placeholder='Title' />
     <input placeholder='Author' />
     <input placeholder='# available' />
     <input placeholder='Book Summary' />
     <input placeholder='cover photo URL' />
    </div>
   </div>
  </div>
 )
}