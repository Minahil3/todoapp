import { useContext } from "react";
import { TodoContext } from "../App";
import { TodoCard } from "./TodoCard";

export function TodoList() {
  const { todos, selectedTab } = useContext(TodoContext);

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => (
        <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} />
      ))}
    </>
  );
}

