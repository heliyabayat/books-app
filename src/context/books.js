import axios from "axios";
import { createContext, useState } from "react";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3001/books`);
    setBooks(response.data);
  };

  const createBook = async (title) => {
    //we add updated data into api server than get response of updated data
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    // than we have to add that new data we received and update the local(update local)
    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
  };

  const deleteBookById = async (id) => {
    //we add updated data into api server than get response of updated data
    await axios.delete(`http://localhost:3001/books/${id}`);
    //in here we do not need to update local
    const updateBooksDelete = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooksDelete);
  };
  const valueToShare = {
    books,
    editBookById,
    createBook,
    deleteBookById,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
