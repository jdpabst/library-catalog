import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from "../../context";
import { Book } from '../../types';
import './BookInfo.css';

type Params = {
 id: string;
}

export default function BookInfo() {
 const { id } = useParams<Params>();
 const { state } = useUserContext(); // Destructure state directly
 const [book, setBook] = useState<Book | undefined>(undefined); // Local state to store the book

 useEffect(() => {
  if (id) { // Ensure id is not empty
   const foundBook = state.catalog.find((book) => book['id'] === parseInt(id));
   setBook(foundBook);
  }
 }, [id, state.catalog]);

 if (!book) {
  return <div>Book not Found</div>
 }


 return (

  <div className='book-info-main-container'>
   <div className='book-info-contents-container'>
    <ul>
     <li>
      <div className='book-container'>
       <img src={book.cover} />
       <div className='book-info-container'>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p className='highlighted-text'>Available Copies: {book.available}</p>
        <p>{book.summary}</p>
       </div>
       {book && ( // Ensure book is not null before rendering the Link component
        <Link to={`/edit-book/${book.id}`}>
         <button className='edit-button'>Edit Book</button>
        </Link>
       )}
      </div>
     </li>
    </ul>

   </div>

  </div>

 )

}