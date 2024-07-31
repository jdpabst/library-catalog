import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "./context";

export function useSelectedBookFromURL() {
 const { id } = useParams();
 const { catalog, setSelectedBook, setCatalog } = useUserContext();

 useEffect(() => {
  if (id) { // Ensure id is not empty
   const foundBook = catalog.find((book) => book['id'] === parseInt(id));
   setSelectedBook(foundBook);
  }
 }, [id, catalog]);
}