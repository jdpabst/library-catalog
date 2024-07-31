import { createContext, useContext, useState } from "react";
import { UserContextType } from "./types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
  const [catalog, setCatalog] = useState([])
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <UserContext.Provider value={{ catalog, setCatalog, selectedBook, setSelectedBook }}>
      {children}
    </ UserContext.Provider>
  )
};

export const useUserContext = () => useContext(UserContext);

