

import React from "react";
import MemberTable from "../components/MemberTable";

const Dashboard = ({ books, student, issuedBooks }) => {
  const today = new Date().toISOString().split("T")[0];

  const activeBooks = issuedBooks.filter((item) => !item.returned);
  const overdueBooks = activeBooks.filter((item) => item.dueDate < today);
  const returnedBooks = issuedBooks.filter((item) => item.returned);

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
    

      <div className="dashboard-cards">
        <div className="stat-card blue">
          <span>📚</span>
          <p>Total Books</p>
          <h2>{books.length}</h2>
        </div>

        <div className="stat-card green">
          <span>👥</span>
          <p>Total Members</p>
          <h2>{student.length}</h2>
        </div>

        <div className="stat-card orange">
          <span>📖</span>
          <p>Books Issued</p>
          <h2>{activeBooks.length}</h2>
        </div>

        <div className="stat-card red">
          <span>⏰</span>
          <p>Overdue Books</p>
          <h2>{overdueBooks.length}</h2>
        </div>
      </div>

      
<div className="panel">
  <h2>Recent Members</h2>

  <table className="data-table">
    <thead>
      <tr>
        <th>Member ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>101</td>
        <td>Priya</td>
        <td>ECE</td>
        <td>priya@example.com</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Monika</td>
        <td>CSD</td>
        <td>monika@example.com</td>
      </tr>
      <tr>
        <td>103</td>
        <td>Swastika</td>
        <td>CSE</td>
        <td>swastika@example.com</td>
      </tr>
      <tr>
        <td>104</td>
        <td>Sarvesh</td>
        <td>CSD</td>
        <td>sarvesh@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

      
    </div>
  );
};

export default Dashboard;

