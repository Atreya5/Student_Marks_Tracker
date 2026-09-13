import React,{useState} from "react";

function MarksForm({onAddExpense}){
  const [RollNo,setRollNo]=useState("");
  const [name,setName]=useState("");
  const [maths,setMaths]=useState("");
  const [science,setScience]=useState("");
  const [english,setEnglish]=useState("");
  const [total,setTotal]=useState("");

  function handleSubmit(event){
    event.preventDefault();

    const newMarks={
      rollNo:Number(rollNo),
      name:name,
      maths:Number(maths),
      science:Number(science),
      english:Number(english),
      total:
        Number(maths) +
        Number(science) +
        Number(english),
    };
    onAddmarks(newMarks);

    setRollNo("");
    setName("");
    setMaths("");
    setScience("");
    setEnglish("");
    setTotal("");

  }

  return (
    <div>
      <h2>Add Marks</h2>

      <form onSubmit={handleSubmit}>


        <label>
          Roll No
          <input 

          value={RollNo}
           onChange={(event) => setRollNo(event.target.value)}
          >
            
          </input>
        </label> 
         <label>
          Name
         <input
  name="name"
  placeholder="Name"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
        </label>

        <label>
          Maths
          <input
  name="Maths"
  type="number"
  placeholder="Maths marks"
  value={maths}
  onChange={(event) =>setMaths(event.target.value)}
    />      
      </label>

        <label>
  Science
  <input
    name="science"
    type="value"
    value={science}
    onChange={(event) =>setScience(event.target.value)}
  />
</label>
        <label>
  English
  <input
    name="english"
    type="value"
    value={english}
    onChange={(event) =>setEnglish(event.target.value)}
  />
</label>
        <label>
  Total
  <input
    name="total"
    type="value"
    value={total}
    onChange={(event) =>setTotal(event.target.value)}
  />
</label>

        <button type="submit">Add Marks</button>
      </form>
    </div>
  );
}

export default MarksForm;