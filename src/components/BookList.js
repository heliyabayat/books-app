import React from "react";
import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./Bookshow";

export default function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}
