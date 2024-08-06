import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "src/context";
import './AddBook.css';

export default function AddBook() {
 const { addBookToCatalog } = useUserContext();
 const [title, setTitle] = useState('');
 const [author, setAuthor] = useState('');
 const [available, setAvailable] = useState(0);
 const [summary, setSummary] = useState('');
 const [cover, setCover] = useState('');
 const [error, setError] = useState('');

 const navigate = useNavigate();

 function handleError() {
  setError('')
 }

 async function addBook() {

  if (!title || !author || !summary) {
   setError('Title, author, and summary are required.');
   return;
  }

  try {
   const response = await axios.post(`http://localhost:3001/catalog/`, {
    title,
    author,
    available,
    summary,
    cover
   });
   console.log(`Book added: ${response.data}`);
   addBookToCatalog(response.data);

   navigate(`/book-info/${response.data.id}`)

  } catch (err) {
   console.log(`Error adding book: ${err}`)
  }
 }


 return (
  <div className='add-book-main-container'>
   <div className='add-book-info-container'>
    <img src='/assets/book-placeholder.svg' />
    {error && <div className="error">
     <p>{error}</p>
     <button onClick={handleError} className="error-bttn">x</button>
    </div>}
    <form className='add-book-info' onSubmit={e => {
     e.preventDefault();
     addBook();
    }}>
     <input
      name='title'
      onChange={e => setTitle(e.target.value)}
      value={title}
      placeholder='Title'
     />
     <input
      name='author'
      onChange={e => setAuthor(e.target.value)}
      value={author}
      placeholder='Author'
     />
     <input
      name='available'
      onChange={e => setAvailable(Number(e.target.value))}
      value={available}
      placeholder='# Available'
     />
     <input
      name='cover'
      onChange={e => setCover(e.target.value)}
      value={cover}
      placeholder='Cover Photo URL'
     />
     <input className='summary-input'
      name='summary'
      onChange={e => setSummary(e.target.value)}
      value={summary}
      placeholder='Book Summary'
     />
     <button>Add Book</button>
    </form>
   </div>
  </div>
 )
}