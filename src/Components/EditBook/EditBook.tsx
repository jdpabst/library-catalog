import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from "../../context";
import './EditBook.css';


type Params = {
 id: string;
}

export default function EditBook() {
 const { id } = useParams<Params>();
 const { state } = useUserContext();

 const selectedBook = state.catalog.find(item => {
  return item['id'] == id
 })

 if (!selectedBook) {
  return <div> Book Not Found</div>
 }


 return (
  <div>
   <div className='edit-book-main-container'>
    <div className='edit-book-info-container'>
     <img src={selectedBook['cover']} />
     <form className='edit-book-info'>
      {/* value will be from the DB */}
      <input
       name='title'
       // onChange={handleInput}
       value={selectedBook['title']}
       placeholder='Title'
      />
      <input
       name='author'
       // onChange={handleInput}
       value={selectedBook['author']}
       placeholder='Author'
      />
      <input
       name='available'
       // onChange={handleInput}
       value={selectedBook['available']}
       placeholder='# Available'
      />
      <input
       name='cover'
       // onChange={handleInput}
       value={selectedBook['cover']}
       placeholder='Cover Photo URL'
      />
      <input className='summary-input'
       name='summary'
       // onChange={handleInput}
       value={selectedBook['summary']}
       placeholder='Book Summary'
      />
      {/* save to backend */}
      <button>Save</button>
     </form>
    </div>
   </div>
  </div>
 )
}