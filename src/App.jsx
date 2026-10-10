import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: "101", name: "Harry Potter", author: "J.K. Rowling", category: "Fiction" },
    { id: "102", name: "Mahabharata", author: "Vyasa", category: "Epic" },
    { id: "103", name: "Wings of Fire", author: "A.P.J. Abdul Kalam", category: "Biography" },
    { id: "104", name: "The Alchemist", author: "Paulo Coelho", category: "Fiction" },
    { id: "105", name: "Atomic Habits", author: "James Clear", category: "Self Help" },
    { id: "106", name: "A Brief History of Time", author: "Stephen Hawking", category: "Science" },
    { id: "107", name: "Ponniyin Selvan", author: "Kalki", category: "History" },
    { id: "108", name: "Clean Code", author: "Robert C. Martin", category: "Technology" }
  ]);

  const [student, setStudent] = useState([
    { id: "101", name: "Priya", dep: "ECE", email: "priya@example.com" },
    { id: "102", name: "Monika", dep: "CSD", email: "monika@example.com" },
    { id: "103", name: "Swastika", dep: "CSE", email: "swastika@example.com" },
    { id: "104", name: "Sarvesh", dep: "CSD", email: "sarvesh@example.com" },
    { id: "105", name: "Arun", dep: "IT", email: "arun@example.com" },
    { id: "106", name: "Divya", dep: "ECE", email: "divya@example.com" }
  ]);

  const [issuedBooks, setIssuedBooks] = useState([
    { id: 1, memberId: "101", bookId: "B101", issueDate: "2026-10-01", dueDate: "2026-10-20", returned: false },
    { id: 2, memberId: "102", bookId: "B103", issueDate: "2026-10-02", dueDate: "2026-10-08", returned: false },
    { id: 3, memberId: "103", bookId: "B104", issueDate: "2026-10-04", dueDate: "2026-10-25", returned: false },
    { id: 4, memberId: "104", bookId: "B105", issueDate: "2026-09-20", dueDate: "2026-10-01", returned: true }
  ]);

  useEffect(() => {
    document.title = "Library Management System";
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="topbar">
          <h2>📚 Library Management System</h2>
          <span className="admin-label">Admin</span>
        </header>

        <Sidebar
          books={books}
          setBooks={setBooks}
          student={student}
          setStudent={setStudent}
          issuedBooks={issuedBooks}
          setIssuedBooks={setIssuedBooks}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

