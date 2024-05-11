import React from "react";
import CreateBook from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";

export default function App() {
  const { fetchBooks } = useContext(BooksContext);v
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>reading list</h1>
      <CreateBook />
      <BookList />
    </div>
  );
}
