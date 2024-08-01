import { Link } from 'react-router-dom';
import { useUserContext } from "../../context";
import { useSelectedBookFromURL } from '../../hooks';
import './BookInfo.css';

export default function BookInfo() {

 const { selectedBook } = useUserContext();

 useSelectedBookFromURL();

 if (!selectedBook) {
  return <div>Book not Found</div>
 }


 return (

  <div className='book-info-main-container'>
   <div className='book-info-contents-container'>
    <ul>
     <li>
      <div className='book-container'>
       <img src={selectedBook.cover} />
       <div className='book-info-container'>
        <h1>{selectedBook.title}</h1>
        <h2>{selectedBook.author}</h2>
        <p className='highlighted-text'>Available Copies: {selectedBook.available}</p>
        <p>{selectedBook.summary}</p>
       </div>

       <div className='book-info-bttns'>
        <Link to={`/edit-book/${selectedBook.id}`}>
         <button className='edit-button'>Edit Book</button>
        </Link>
        <Link to='/catalog' >
         <button className='edit-button'>Back to Catalog</button>
        </Link>
       </div>

      </div>
     </li>
    </ul>

   </div>

  </div>

 )

}