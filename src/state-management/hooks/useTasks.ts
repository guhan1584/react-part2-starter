import { useContext } from "react";
import TaskContext from "../contexts/taskContexts";

const useTasks = () => useContext(TaskContext);

export default useTasks;
