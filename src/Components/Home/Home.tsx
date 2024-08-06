import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';


export default function Home() {
 const [input, setInput] = useState('');
 const [searchResults, setSearchResults] = useState([]);
 const [searchPerformed, setSearchPerformed] = useState(false)


 async function handleSearch() {
  if (!input.trim()) {
   setSearchPerformed(true);
   setSearchResults([]);
   return;
  }

  try {
   const response = await axios.get('http://localhost:3001/catalog/search', {
    params: { query: input }
   });
   setSearchResults(response.data);
   setSearchPerformed(true);

  } catch (err) {
   console.log(`Error searching for books: ${err}`)
  }
 }


 return (

  <div className='home-container'>
   <ul className='home-list'>
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
    <li className='search-container'>
     <input onChange={e => setInput(e.target.value)} className='search-input' placeholder="search by title or author" />
     <button className='search-bttn' onClick={handleSearch}>Search</button>
    </li>
    {searchPerformed && (
     <li className='search-results-main-container'>
      <ul>
       {searchResults.length > 0 ? (
        searchResults.map(book => (
         <li className='search-result' key={book.id}>
          <Link to={`/book-info/${book.id}`}>
           <img src={book.cover} alt={book.title} />
          </Link>
         </li>
        ))
       ) : (
        <p className='search-alt'>No results found...</p>
       )}
      </ul>
     </li>
    )}
   </ul>


  </div>

 )

}