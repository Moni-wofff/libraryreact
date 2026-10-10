
import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import Members from "../pages/Members";
import IssueBook from "../pages/IssueBook";
import ReturnBooks from "../pages/ReturnBooks";

const Sidebar = ({ books, setBooks, student, setStudent, issuedBooks, setIssuedBooks }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <p className="menu-title">SideBar</p>

        
      
<NavLink to="/dashboard" className="nav-link">
  Dashboard
</NavLink>

<NavLink to="/books" className="nav-link">
  Books
</NavLink>

<NavLink to="/members" className="nav-link">
  Members
</NavLink>

<NavLink to="/issuebooks" className="nav-link">
  Issue Books
</NavLink>

<NavLink to="/returnbooks" className="nav-link">
  Return Books
</NavLink>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                books={books}
                student={student}
                issuedBooks={issuedBooks}
              />
            }
          />

          <Route
            path="/books"
            element={<Books books={books} setBooks={setBooks} />}
          />

          <Route
            path="/members"
            element={<Members student={student} setStudent={setStudent} />}
          />

          <Route
            path="/issuebooks"
            element={
              <IssueBook
                books={books}
                student={student}
                issuedBooks={issuedBooks}
                setIssuedBooks={setIssuedBooks}
              />
            }
          />

          <Route
            path="/returnbooks"
            element={
              <ReturnBooks
                books={books}
                student={student}
                issuedBooks={issuedBooks}
                setIssuedBooks={setIssuedBooks}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Sidebar;

