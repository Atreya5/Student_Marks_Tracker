import React from "react";

function MarksItem({ marks, onDelete }) {
  return (
    <div className="marks-row">
      <h3 className="marks-Roll no.">{marks.RollNo}</h3>

      <p className="marks-name">{marks.name}</p>

      <p className="marks-math"> {Number(marks.maths).toFixed(2)}</p>
      <p className="marks-science"> {Number(marks.science).toFixed(2)}</p>
      <p className="marks-math">  {Number(marks.english).toFixed(2)}</p>
     < p className="marks-total">  {Number(marks.total).toFixed(2)}</p>

      <button
  className="delete-button"
onClick={() => onDelete(marks.RollNo)}>
</button>
</div>
)}
export default MarksItem;