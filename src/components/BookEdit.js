import React from "react";
import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleOnChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //this on submit relates to opening and closing the edit part
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} onChange={handleOnChange} className="input" />
      <button className="button is-primary">save</button>
    </form>
  );
}
