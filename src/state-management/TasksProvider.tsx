import React, { Children, ReactNode, useReducer } from "react";
import taskReducer from "./reducers/taskReducer";
import TaskContext from "./contexts/taskContexts";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, tasksDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
