import React from "react";
import CreateBook from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = React.useState([]);
  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updateBooksDelete = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooksDelete);
  };
  const editBookById = (id, newTitle) => {
    const updateBooksEdit = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBooksEdit);
  };
  return (
    <div className="app">
      <CreateBook onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}
