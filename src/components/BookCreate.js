import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = React.useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">create</button>
      </form>
    </div>
  );
}
