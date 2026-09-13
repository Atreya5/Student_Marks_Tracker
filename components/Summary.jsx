import React from "react";

function MarksSummary({ marks }) {
  const totalStudents = marks.length;
  

  const totalMarks = marks.reduce(
    (total, student) =>
      total +
      Number(student.maths) +
      Number(student.science) +
      Number(student.english),
    0
  );

  const averageMarks =
    totalStudents === 0
      ? 0
      : totalMarks / (totalStudents * 3);

  return (
    <div className="card-container">

      <div className="card">
        <h3>Total Students</h3>
        <p className="card-amount">
          {totalStudents}
        </p>
      </div>

      <div className="card">
        <h3>Total Marks</h3>
        <p className="card-amount">
          {totalMarks}
        </p>
      </div>

      <div className="card">
        <h3>Average Marks</h3>
        <p className="card-amount">
          {averageMarks.toFixed(2)}
        </p>
      </div>

    </div>
  );
}

export default MarksSummary;




// import React,{useState} from "react";


// function MarksSummary({ marks }) {
//   const total = marks.reduce(
//     (total, expense) => total + Number(marks.math)+ Number(marks.science)+ Number(marks.english),
//     0
//   );

//   return (
//     <div className="card-container">
//       <div className="card">
//   <h3>Roll No</h3>
//   <p className="RollNo"> {RollNo.toFixed(2)}</p>
// </div>

// <div className="card">
//   <h3>Student Name</h3>
//   <p className="marks-name"> {marks.toFixed(2)}</p>
// </div>
// <div className="card">
//   <h3>Math Marks</h3>
//   <p className="marks-math">{maths.toFixed(2)}</p>
// </div>
// <div className="card">
//   <h3>Science Marks</h3>
//   <p className="marks-science"> {science.toFixed(2)}</p>
// </div>
// <div className="card">
//   <h3>English Marks</h3>
//   <p className="marks-english">{english.toFixed(2)}</p>
// </div>
// </div>
//   );
// }

// export default MarksSummary;