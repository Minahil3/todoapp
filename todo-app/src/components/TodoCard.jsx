import { useContext } from "react";
import { TodoContext } from "../App";

export function TodoCard({ todo, todoIndex }) {
  const { handleDeleteTodo, handleCompleteTodo } = useContext(TodoContext);

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => handleCompleteTodo(todoIndex)}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
