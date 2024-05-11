import React from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";
import { useContext } from "react";

export default function Bookshow({ book }) {
  const { deleteBookById } = useContext(BooksContext);
  const [showEdit, setShowEdit] = React.useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show actions">
      <button className="delete" onClick={handleDeleteClick}>
        delete
      </button>
      <button onClick={handleEditClick}>edit</button>
      <img alt="photos" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
    </div>
  );
}
