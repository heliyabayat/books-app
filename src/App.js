import React from "react";
import CreateBook from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {
  const [books, setBooks] = React.useState([]);

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
  React.useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    //we add updated data into api server than get response of updated data
    await axios.delete(`http://localhost:3001/books/${id}`);
    //in here we do not need to update local
    const updateBooksDelete = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooksDelete);
  };

  const editBookById = async (id, newTitle) => {
    //we add updated data into api server than get response of updated data
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // than we have to add that new data we received and update the local(update local)
    const updateBooksEdit = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooksEdit);
  };

  return (
    <div className="app">
      <h1>reading list</h1>
      <CreateBook onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}
