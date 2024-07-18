import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';


export default function Home() {
 const [input, setInput] = useState('');



 return (

  <div className='home-container'>
   <ul className='home-list'>
    <li className='search-container'>
     <input onChange={e => setInput(e.target.value)} className='search-input' placeholder="search by title" />
     {/* need to add code to go through the database of books and find the right one */}
     <button className='search-bttn'>Search</button>
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
   </ul>


  </div>

 )

}