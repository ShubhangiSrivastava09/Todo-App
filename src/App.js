import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

import AddTask from "./Screens/AddTask/addTask";
import Home from "./Screens/Home/home";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </TaskProvider>
  );
}

export default App;
