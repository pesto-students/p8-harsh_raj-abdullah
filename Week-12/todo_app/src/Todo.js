import React from "react";
import { FaTrashAlt, FaCheck, FaUndo } from "react-icons/fa";

const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <div class='todo'>
      <button
        class='icon'
        onClick={() => handleMark(index)}
        style={{ color: "#50fa7b" }}
      >
        {todo.isDone ? <FaUndo /> : <FaCheck/> }
      </button>
      <h3
        className='content'
        style={
          todo.isDone
            ? {
                textDecoration: "line-through",
                color: "gray",
              }
            : {}
        }
      >
        {todo.content}
      </h3>

      <button
        class='icon'
        onClick={() => handleDelete(index)}
        style={{ color: "#ff5555" }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Todo;