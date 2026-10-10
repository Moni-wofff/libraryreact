
import React, { useState } from "react";
import MemberTable from "../components/MemberTable";

const Members = ({ student, setStudent }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   


    setStudent([
      ...student,
      { id: id.trim(), name: name.trim(), dep, email: email.trim() }
    ]);

    setId("");
    setName("");
    setDep("");
    setEmail("");
  };

  return (
    <div>
      <h1 className="page-title">Members</h1>
     

      <div className="panel">
        <h2>Add New Member</h2>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Member ID</label>
            <input value={id} onChange={(e) => setId(e.target.value)} placeholder="111" />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter member name" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select value={dep} onChange={(e) => setDep(e.target.value)}>
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>CSD</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>IT</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />
          </div>

          <button className="primary-btn" type="submit">+ Add Member</button>
        </form>
      </div>

      <div className="panel">
        <h2>Member List </h2>
        <MemberTable student={student} />
      </div>
    </div>
  );
};

export default Members;

