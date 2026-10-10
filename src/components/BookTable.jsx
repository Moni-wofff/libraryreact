
import React from "react";

const BookTable = ({ books }) => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td><span className="category-tag">{book.category}</span></td>
            </tr>
          ))}

          {books.length === 0 && (
            <tr><td colSpan="4">No books found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;

