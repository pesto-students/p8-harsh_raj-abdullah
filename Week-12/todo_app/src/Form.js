import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

// import { Button, Container, IconButton, Input } from "@mui/material";
// import AddTaskIcon from "@mui/icons-material/AddTask";
// import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const Form = ({ addTodo, clearAllFinished }) => {
  const [formValue, setFormValue] = useState({
    content: "",
    isDone: false,
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(formValue);
    setFormValue({ content: "", isDone: false });
  };

  return (
    <div style={{width: '100%'}}>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          class='input'
          required
          value={formValue.content}
          onChange={e => setFormValue({ ...formValue, content: e.target.value }) }
        />
        <button class='btn' type="submit">
          <FaPlus style={{verticalAlign: 'middle'}} />
        </button>
        <button class='btn' style={{ backgroundColor: 'rgb(192, 25, 78)'}} onClick={clearAllFinished}>
          Clear All Done
        </button>
      </form>
    </div>
  );
};

export default Form;