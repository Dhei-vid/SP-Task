import React, { useState, useEffect, useContext } from "react";
import { TodoDataContext } from "./context/MainContext";
import { ITodoList } from "./common/types";
import Todos from "./components/todo1/todo.components";
import "./App.css";

function App() {
  const response = useContext(TodoDataContext);
  const [todoList, setTodoList] = useState<ITodoList[]>([]);

  useEffect(() => {
    if (response) {
      setTodoList(response.todos);
    }
  }, [response]);

  return (
    <div className="App">
      <div className="todoContainer">
        <Todos />
      </div>

      <div className="taskEditContainer">
        <p>I am HE</p>
      </div>
    </div>
  );
}

export default App;
