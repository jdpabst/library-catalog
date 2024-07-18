import {
 Route,
 Routes
} from "react-router-dom";

import BookInfo from "./Components/BookInfo/BookInfo.tsx";
import Catalog from "./Components/Catalog/Catalog.tsx";
import Home from "./Components/Home/Home.tsx";

function NavRoutes() {
 return (
  <Routes>

   <Route
    exact
    path="/"
    element={<Home />}
   />

   <Route
    path='/catalog'
    element={<Catalog />}
   />

   <Route
    path='/book-info'
    element={<BookInfo />}
   />

  </Routes>
 )
}

export default NavRoutes;