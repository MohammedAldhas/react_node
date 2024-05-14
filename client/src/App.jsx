import "./App.css";
import Todo from "./components/Todo";
import CreateTask from "./components/CreateTask";
import UbdateTask from "./components/UbdateTask";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo></Todo>}></Route>
        <Route path="/list/:id" element={<List></List>}></Route>
        <Route path="/createTask" element={<CreateTask></CreateTask>}></Route>
        <Route
          path="/ubdateTask/:id"
          element={<UbdateTask></UbdateTask>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
