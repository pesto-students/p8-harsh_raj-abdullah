import { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState(
    !localStorage.getItem("todos-list")
      ? []
      : JSON.parse(localStorage.getItem("todos-list"))
  );

  //everytime todos list changes, save the current state to local storage
  useEffect(() => {
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }, [todos]);

  const handleMark = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (index) => {
    //delete one item at index given
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const clearAllFinished = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.isDone === false));
  };

  return (
    <div className="container">
      <header style={{ color: "#8be9fd" }}>
        <h2>Add Your List Here</h2>
      </header>
      <br />
      <Form addTodo={addTodo} clearAllFinished={clearAllFinished} />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleMark={handleMark}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;