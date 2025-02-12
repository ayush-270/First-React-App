import "./App.css";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo",todo);
    setTodos(todos.filter((e) => {
      return e !==  todo;

  }))}

  const [todos, setTodos] = useState([
    { sno: 1, title: "Workout", desc: "You have to go to the GYM" },
    { sno: 2, title: "Coding", desc: "You have to practice coding problems" },
    { sno: 3, title: "Project", desc: "You have to continue with our ongoing project" },
    { sno: 4, title: "Relax", desc: "You have to go for a walk." },
  ]);
  return (
    <>
      <Header Title = "My Todos List" searchBar = {true}/>
      <AddTodo/>
      <Todos todos = {todos} onDelete= {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
