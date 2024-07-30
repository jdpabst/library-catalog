import {
  Route,
  Routes
} from "react-router-dom";

import AddBook from "./Components/AddBook/AddBook.tsx";
import BookInfo from "./Components/BookInfo/BookInfo.tsx";
import Catalog from "./Components/Catalog/Catalog.tsx";
import EditBook from "./Components/EditBook/EditBook.tsx";
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
        path='/book-info/:id'
        element={<BookInfo />}
      />

      <Route
        path='/add-book'
        element={<AddBook />}
      />

      <Route
        path='/edit-book/:id'
        element={<EditBook />} />

    </Routes>

  )
}

export default NavRoutes;