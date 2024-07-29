import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer.tsx';
import Header from './Components/Header/Header.tsx';
import NavRoutes from './Router';
import { useUserContext, userActions } from './context';



function App() {

  const userContext = useUserContext();

  useEffect(() => {
    getBooks();
  })

  async function getBooks() {
    const bookResults = await axios.get('http://localhost:3001/catalog')
    // console.log(bookResults)

    userContext.dispatch({ type: userActions.SET_CATALOG, value: bookResults.data })
  }




  return (
    <div className="App">
      <Header />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
