import React from "react";
import Todos from "./components/Todos";
import "./App.css";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
