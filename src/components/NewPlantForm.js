import React, { useState } from "react";

function NewPlantForm() {

const [newObj, setNewObj] = useState({
  name: "",
  image: "",
  price: "",
})

function handleChange(e) {
  e.preventDefault();
  setNewObj({...newObj, [e.target.name]: e.target.value})
}

function handleSubmit() {
  fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newObj)
  }
)}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newObj.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={newObj.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={newObj.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
