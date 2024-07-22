import React from "react";
import './AddBook.css';

export default function AddBook() {
 return (
  <div className='add-book-main-container'>
   <div className='add-book-info-container'>
    <img src='/assets/book-placeholder.svg' />
    <form className='add-book-info'>
     <input placeholder='Title' />
     <input placeholder='Author' />
     <input placeholder='# Available' />
     <input placeholder='Cover Photo URL' />
     <input className='summary-input' placeholder='Book Summary' />
     <button>Add Book</button>
    </form>
   </div>
  </div>
 )
}