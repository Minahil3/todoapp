import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/ToDoInput"
import { TodoList } from "./components/ToDoList"
import { useState, createContext, useContext } from "react"


// Creating an empty container 
export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Do a React Course!", complete: true }
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  // Handlers moved inside so we can expose them in context
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = { ...todos[index] };
    completedTodo.complete = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((_, valIndex) => valIndex !== index);
    setTodos(newTodoList);
  }

  //esentially wrapping the app with context so that all components can use it.
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        selectedTab,
        setSelectedTab,
        handleAddTodo,
        handleCompleteTodo,
        handleDeleteTodo,
      }}
    >
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </TodoContext.Provider>
  );
}

export default App;
