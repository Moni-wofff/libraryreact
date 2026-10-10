

import React, { useState } from "react";
import BookTable from "../components/BookTable";

const Books = ({ books, setBooks }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Fiction");

  const handleSubmit = (e) => {
    e.preventDefault();



    setBooks([
      ...books,
      {
        id: id.trim(),
        name: name.trim(),
        author: author.trim(),
        category
      }
    ]);

    setId("");
    setName("");
    setAuthor("");
    setCategory("Fiction");
  };

  return (
    <div>
      <h1 className="page-title">Books</h1>
      

      <div className="panel">
        <h2>Add New Book</h2>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Book ID</label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="109"
            />
          </div>

          <div className="form-group">
            <label>Book Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter book name"
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Fiction</option>
              <option>Epic</option>
              <option>Biography</option>
              <option>Self Help</option>
              <option>Science</option>
              <option>History</option>
              <option>Technology</option>
            </select>
          </div>

          <button className="primary-btn" type="submit">
            + Add Book
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>Book List </h2>

        <BookTable books={books} />
      </div>
    </div>
  );
};

export default Books;