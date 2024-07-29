import React from 'react';
import { useUserContext } from "../../context";
import './EditBook.css';

export default function EditBook() {
 // const [editBook, setEditBook] = useState({
 //  title: `Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter Series #1)`,
 //  author: 'J. K. Rowling, MinaLima Design (Illustrator)',
 //  available: 1,
 //  cover: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781338596700_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
 //  summary: `In this stunning new edition of Harry Potter and the Sorcerer's Stone, experience the story as never before.J.K.Rowling's complete and unabridged text is accompanied by full-color illustrations on nearly every page and eight exclusive, interactive paper craft elements: Readers will open Harry's Hogwarts letter, reveal the magical entryway to Diagon Alley, make a sumptuous feast appear in the Great Hall, and more.Designed and illustrated by award- winning design studio MinaLima — best known for establishing the visual graphic style of the Harry Potter and Fantastic Beasts films — this edition is sure to be a keepsake for Harry Potter fans, a beautiful addition to any collector's bookshelf, and an enchanting way to introduce the first book in this beloved series to a new generation of readers.`
 // })

 // function handleInput(e) {
 //  const { name, value } = e.target;

 //  setEditBook(prevState => ({
 //   ...prevState,
 //   [name]: value
 //  }))

 //  console.log(editBook);
 // }



 const userContext = useUserContext();

 // console.log(userContext)
 // I need to keep track of the book ID so I know which on is being edited - get that from Catalog



 return (
  <div>
   <div className='edit-book-main-container'>
    <div className='edit-book-info-container'>
     <img src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781338596700_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D' />
     <form className='edit-book-info'>
      {/* value will be from the DB */}
      <input
       name='title'
       // onChange={handleInput}
       // value={editBook.title}
       placeholder='Title'
      />
      <input
       name='author'
       // onChange={handleInput}
       // value={editBook.author}
       placeholder='Author'
      />
      <input
       name='available'
       // onChange={handleInput}
       // value={editBook.available}
       placeholder='# Available'
      />
      <input
       name='cover'
       // onChange={handleInput}
       // value={editBook.cover}
       placeholder='Cover Photo URL'
      />
      <input className='summary-input'
       name='summary'
       // onChange={handleInput}
       // value={editBook.summary}
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