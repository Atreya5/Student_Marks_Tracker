import React, { useState } from "react";

// 1. Defined initial state data
const initialStudents = [
  { rollNo: "101", name: "Rahul Sharma", maths: 85, science: 78, english: 92 },
  { rollNo: "102", name: "Priya Patel", maths: 91, science: 88, english: 79 },
  { rollNo: "103", name: "Arjun Verma", maths: 72, science: 65, english: 81 },
  { rollNo: "104", name: "Sneha Gupta", maths: 88, science: 93, english: 90 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Fixed handleAddStudent function
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!rollNo || !name || !maths || !science || !english) return;

    const newStudent = {
      rollNo,
      name,
      maths: Number(maths),
      science: Number(science),
      english: Number(english)
    };

    setStudents([...students, newStudent]);
    
    // Clear inputs
    setRollNo("");
    setName("");
    setMaths("");
    setScience("");
    setEnglish("");
  };

  const handleDelete = (roll) => {
    setStudents(students.filter((s) => s.rollNo !== roll));
  };

  const filteredStudents = students.filter(
    (s) =>
      s.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tracker-container">
      <h1 className="title">Student Marks Tracker</h1>

      {/* Add New Student Card */}
      <div className="card">
        <h2 className="card-title text-blue">Add New Student</h2>
        <form onSubmit={handleAddStudent} className="form-row">
          <div className="input-group">
            <label>Roll No.</label>
            <input
              type="text"
              placeholder="Enter Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Maths Marks</label>
            <input
              type="number"
              placeholder="Enter Maths Marks"
              value={maths}
              onChange={(e) => setMaths(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Science Marks</label>
            <input
              type="number"
              placeholder="Enter Science Marks"
              value={science}
              onChange={(e) => setScience(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>English Marks</label>
            <input
              type="number"
              placeholder="Enter English Marks"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </form>
        <p className="subtext">ⓘ Roll No must be unique</p>
      </div>

      {/* Student List Card */}
      <div className="card">
        <div className="list-header">
          <h2 className="card-title text-blue">Student List</h2>
          <span className="total-count">Total Students: {students.length}</span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search by Roll No or Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Styled Table */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Student Name</th>
              <th>Maths</th>
              <th>Science</th>
              <th>English</th>
              <th>Total</th>
              <th>Average (%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => {
              const total = s.maths + s.science + s.english;
              const avg = (total / 3).toFixed(2);
              return (
                <tr key={s.rollNo}>
                  <td>{s.rollNo}</td>
                  <td>{s.name}</td>
                  <td>{s.maths}</td>
                  <td>{s.science}</td>
                  <td>{s.english}</td>
                  <td className="font-bold">{total}</td>
                  <td className="font-bold">{avg}%</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn btn-edit">Edit</button>
                      <button
                        className="btn btn-delete"
                        onClick={() => handleDelete(s.rollNo)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;