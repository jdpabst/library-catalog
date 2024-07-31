import axios from 'axios';
import { useState } from 'react';
import { useUserContext } from "../../context";
import { useSelectedBookFromURL } from '../../hooks';
import './EditBook.css';


export default function EditBook() {
 useSelectedBookFromURL();
 const { selectedBook, setSelectedBook } = useUserContext();
 const [title, setTitle] = useState(selectedBook?.title);
 const [author, setAuthor] = useState(selectedBook?.author);
 const [available, setAvailable] = useState(selectedBook?.available);
 const [summary, setSummary] = useState(selectedBook?.summary);
 const [cover, setCover] = useState(selectedBook?.cover);

 // useEffect(() => {
 //  if (selectedBook) {
 //   setTitle(selectedBook.title);
 //   setAuthor(selectedBook.author);
 //   setAvailable(selectedBook.available);
 //   setSummary(selectedBook.summary);
 //   setCover(selectedBook.cover);
 //  }
 // }, [selectedBook]);

 if (!selectedBook) {
  return <div> Book Not Found</div>
 }

 async function editBook() {
  try {
   const response = await axios.put(`http://localhost:3001/catalog/${selectedBook.id}`, {
    title,
    author,
    available,
    summary,
    cover
   });
   console.log(`Book updated: ${response.data}`);
   setSelectedBook(response.data); // Ensure this updates the selectedBook state
  } catch (err) {
   console.log(`Error updating book: ${err}`)
  }
 }



 return (
  <div>
   <div className='edit-book-main-container'>
    <div className='edit-book-info-container'>
     <img src={cover} />
     <form className='edit-book-info' onSubmit={e => {
      e.preventDefault();
      editBook();
     }}>
      {/* value will be from the DB */}
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
      {/* save to backend */}
      <button type='submit'>Save</button>
     </form>
    </div>
   </div>
  </div>
 )
}