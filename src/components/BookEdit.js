import React from "react";

export default function BookEdit({ book, onEdit, showEdit }) {
  const [title, setTitle] = React.useState(book.title);
  const handleOnChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
    console.log(showEdit);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} onChange={handleOnChange} className="input" />
      <button className="button is-primary">save</button>
    </form>
  );
}
