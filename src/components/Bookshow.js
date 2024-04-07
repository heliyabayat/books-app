import React from "react";
import BookEdit from "./BookEdit";

export default function Bookshow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = React.useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
    console.log(showEdit);
  };
  return (
    <div className="book-show actions">
      <button className="delete" onClick={handleDeleteClick}>
        delete
      </button>
      <button onClick={handleEditClick}>edit</button>
      {showEdit ? (
        <BookEdit book={book} showEdit={showEdit} onEdit={onEdit} />
      ) : (
        book.title
      )}
    </div>
  );
}
