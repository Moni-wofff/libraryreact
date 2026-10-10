

import React from "react";

const ReturnBooks = ({ books, student, issuedBooks }) => {
  const activeBooks = issuedBooks.filter((item) => !item.returned);

  return (
    <div>
      <h1 className="page-title">Return Books</h1>
      
      <div className="panel">
        <h2>Books to Return </h2>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Book Name</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {activeBooks.map((item) => {
                const member = student.find(
                  (s) => s.id === item.memberId
                );

                const book = books.find(
                  (b) => b.id === item.bookId
                );

                return (
                  <tr key={item.id}>
                    <td>{member ? member.name : "Unknown"}</td>
                    <td>{book ? book.name : "Unknown"}</td>
                    <td>{item.issueDate}</td>
                    <td>{item.dueDate}</td>
                    <td>
                      <span className="status-issued">Issued</span>
                    </td>
                  </tr>
                );
              })}

              {activeBooks.length === 0 && (
                <tr>
                  <td colSpan="5">All books have been returned.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReturnBooks;