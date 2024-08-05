import { createContext, useContext, useState } from "react";
import { UserContextType } from "./types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
  const [catalog, setCatalog] = useState([])
  const [selectedBook, setSelectedBook] = useState(null);

  const updateBookInCatalog = (updatedBook) => {
    setCatalog((prevCatalog) =>
      prevCatalog.map((book) => book.id === updatedBook.id ? updatedBook : book)
    );
    setSelectedBook(updatedBook)
  }

  const addBookToCatalog = (addBook) => {
    setCatalog((prevCatalog) =>
      [...prevCatalog, addBook]
    )
  };

  const deleteBookFromCatalog = (deletedBookId) => {
    setCatalog((prevCatalog) =>
      prevCatalog.filter((book) => book.id !== deletedBookId)
    );
  };

  return (
    <UserContext.Provider value={{ catalog, setCatalog, selectedBook, setSelectedBook, updateBookInCatalog, addBookToCatalog, deleteBookFromCatalog }}>
      {children}
    </ UserContext.Provider>
  )
};

export const useUserContext = () => useContext(UserContext);
