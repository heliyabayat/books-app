import React from "react";
import BookEdit from "./BookEdit";

export default function Bookshow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = React.useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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
