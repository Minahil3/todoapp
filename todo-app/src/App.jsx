import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/ToDoInput"
import { TodoList } from "./components/ToDoList"
import { useState, createContext, useEffect } from "react"

// Creating an empty container 
export const TodoContext = createContext();

function App() {


  // lazy initialization of state here, if nothign is saved in local storage simple use the default value. 
  // allows to refresh and maintain data by parsing 
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved
    ? JSON.parse(saved) 
    : [{ input: "Hello! Do a React Course!", complete: true }];
});


  const [selectedTab, setSelectedTab] = useState("Open");

  // this ensures that whatever is shown on the ui is also saved. So, this works after rendering
  // allows us to update storage only when todo changes, otherwise it would store to localstorage everytime it renders and that is essentially waste of space.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    newTodoList[index] = { ...todos[index], complete: true };
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, valIndex) => valIndex !== index);
    setTodos(newTodoList);
  }

  return (
    // provides all the components with these values, so these are not global variables.
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
