import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from "../../context";
import { Book } from '../../types';
import './Catalog.css';

export default function Catalog() {

 const userContext = useUserContext();
 const books: Book[] = userContext.state.catalog;

 return (
  <div className='catalog-main-container'>
   <ul>
    {books.map(book => (
     <Link key={book.id} to={`/book-info/${book.id}`}>
      <li>
       <img src={book.cover} alt={book.title} />
      </li>
     </Link>
    ))}
   </ul>

  </div>
 )
}