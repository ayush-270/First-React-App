import "./App.css";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  const onDelete = () => {
    console.log("I am on delete")
  }

  let todos = [
    { sno: 1, title: "Workout", desc: "You have to go to the GYM" },
    { sno: 2, title: "Coding", desc: "You have to practice coding problems" },
    { sno: 3, title: "Project", desc: "You have to continue with our ongoing project" },
    { sno: 4, title: "Relax", desc: "You have to go for a walk." },
  ];
  return (
    <>
      <Header Title = "My Todos List" searchBar = {true}/>
      <Todos todos = {todos} onDelete= {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
