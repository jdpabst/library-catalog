import { Link } from 'react-router-dom';
import { useUserContext } from "../../context";
import './Catalog.css';

export default function Catalog() {

 const { catalog } = useUserContext();

 return (
  <div className='catalog-main-container'>
   <ul>
    {catalog.map(book => (
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