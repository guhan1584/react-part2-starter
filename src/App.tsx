import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/contexts/taskContexts";
import taskReducer from "./state-management/reducers/taskReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
