import React from "react";
import './Home.css';


export default function Home() {
 return (

  <div className='home-container'>
   <ul className='home-list'>
    <li className='search-container'>
     <input className='search-input' placeholder="search by title or author" />
     <button className='search-bttn'>Search</button>
    </li>
    <li>
     <button>View Catalog</button>
    </li>
    <li>
     <button>Add New Book</button>
    </li>
   </ul>


  </div>

 )

}