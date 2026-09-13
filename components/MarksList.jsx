import React from "react";
import MarksItem from "./MarksItem";

function MarksList({ marks, onDelete }) {
  if (marks.length === 0) {
    return <p>No student found.</p>;
  }

  return (
    <div className="marks-list">
      <h2>Student List</h2>

      {marks.map((student) => (
        <MarksItem
          key={student.rollNo}
          marks={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MarksList;

// import React,{useState} from "react";

// import MarksItem from "./MarksItem"

// function MarksList({ marks, onDelete  }) {
//   if (marks.length === 0) {
//     return <p>No student found.</p>;
//   }

//   return (
//     <div className="marks-list">
//       <h2>Add New Student</h2>

//       {marks.map((marks) => (
//         <MarksItem
//           key={marks.rollNo}
//           maths={maths}
//           science={science}
//           english={english}
//           total={total}
//           onDelete={onDelete}
//         />
//       ))}
//     </div>
//   );
// }

// export default MarksList;