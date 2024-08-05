import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';


export default function Home() {
 const [input, setInput] = useState('');
 const [searchResults, setSearchResults] = useState([]);


 async function handleSearch() {
  try {
   const response = await axios.get('http://localhost:3001/catalog/search', {
    params: { query: input }
   });
   setSearchResults(response.data);
  } catch (err) {
   console.log(`Error searching for books: ${err}`)
  }
 }


 return (

  <div className='home-container'>
   <ul className='home-list'>
    <li className='search-container'>
     <input onChange={e => setInput(e.target.value)} className='search-input' placeholder="search by title or author" />
     {/* need to add code to go through the database of books and find the right one */}
     <button className='search-bttn' onClick={handleSearch}>Search</button>
    </li>
    <li>
     <Link to='/catalog' >
      <button>View Catalog</button>
     </Link>
    </li>
    <li>
     <Link to='/add-book'>
      <button>Add New Book</button>
     </Link>

    </li>
    <li>
     <ul>
      {searchResults.map(book => (
       <li key={book.id}>
        <Link to={`/book-info/${book.id}`}>
         <img src={book.cover} alt={book.title} />
         {/* <h3>{book.title}</h3>
         <p>{book.author}</p> */}
        </Link>
       </li>
      ))}
     </ul>
    </li>
   </ul>


  </div>

 )

}