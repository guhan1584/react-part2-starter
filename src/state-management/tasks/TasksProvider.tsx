import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContexts";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

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
