import './App.css';
import Footer from './Components/Footer/Footer.tsx';
import Header from './Components/Header/Header.tsx';
import NavRoutes from './Router';

function App() {
  return (
    <div className="App">
      <Header />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
