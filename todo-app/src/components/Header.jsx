import { useContext } from "react";
import { TodoContext } from "../App";

export function Header() {
  const { todos } = useContext(TodoContext);

  const todosLength = todos.length;
  const isTasksPlural = todosLength !== 1;
  const tasksOrTask = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {tasksOrTask}
      </h1>
    </header>
  );
}
