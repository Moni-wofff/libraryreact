
import React, { useState } from "react";

const IssueBook = ({ books, student, issuedBooks, setIssuedBooks }) => {
  const [memberId, setMemberId] = useState("");
  const [bookId, setBookId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   

    
    const newRecord = {
      id: Date.now(),
      memberId,
      bookId,
      issueDate,
      dueDate,
      returned: false
    };

    setIssuedBooks([...issuedBooks, newRecord]);

    setMemberId("");
    setBookId("");
    setIssueDate("");
    setDueDate("");

    alert("Book issued successfully!");
  };

  const activeBooks = issuedBooks.filter(
    (item) => !item.returned
  );

  return (
    <div>
      <h1 className="page-title">Issue Books</h1>
      

      <div className="panel">
        <h2>Issue a Book</h2>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Member</label>

            <select
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            >
              <option value="">Choose a member</option>

              {student.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} - {item.id}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Book</label>

            <select
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            >
              <option value="">Choose a book</option>

              {books
                .filter(
                  (book) =>
                    !issuedBooks.some(
                      (item) =>
                        item.bookId === book.id &&
                        !item.returned
                    )
                )
                .map((book) => (
                  <option key={book.id} value={book.id}>
                    {book.name} - {book.id}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Issue Date</label>

            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Due Date</label>

            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <button className="primary-btn" type="submit">
            Issue Book
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>
           Issued Books
        </h2>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Book</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {activeBooks.map((item) => (
                <tr key={item.id}>
                  <td>
                    {student.find(
                      (s) => s.id === item.memberId
                    )?.name || "Unknown"}
                  </td>

                  <td>
                    {books.find(
                      (b) => b.id === item.bookId
                    )?.name || "Unknown"}
                  </td>

                  <td>{item.dueDate}</td>

                  <td>
                    <span className="status-issued">
                      Issued
                    </span>
                  </td>
                </tr>
              ))}

              {activeBooks.length === 0 && (
                <tr>
                  <td colSpan="4">
                    No books are currently issued.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;