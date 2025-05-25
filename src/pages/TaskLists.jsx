import { useState } from "react";
import tasksList from "../data/tasks.json";
import TaskDetails from "./TaskDetails";
export default function TaskLists({ employee }) {
  const [tasks, setTasks] = useState(tasksList);
  function handleCompleteTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.taskID === id ? { ...task, isComplete: true } : task
      )
    );
  }
  return (
    <div className="container">
      <h2 className="title">Default Task</h2>
      <br />
      {tasks.map((task) => (
        <TaskDetails
          key={task.taskID}
          task={task}
          employee={employee}
          onComplete={handleCompleteTask}
        />
      ))}
    </div>
  );
}
