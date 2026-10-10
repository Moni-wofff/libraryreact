
import React from "react";

const MemberTable = ({ student }) => {
  return (
    <div className="table-wrapper">
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
          {student.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><span className="category-tag">{item.dep}</span></td>
              <td>{item.email}</td>
            </tr>
          ))}

          {student.length === 0 && (
            <tr><td colSpan="4">No members found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;

