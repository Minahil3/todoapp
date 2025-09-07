import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/ToDoInput"
import { TodoList } from "./components/ToDoList"
import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([
    {input: 'Hello! Do a React Course!', complete: true}
  ])
  const [selectedTab, setSelectedTab] = useState('Open')

function handleAddTodo(newTodo){
  const newTodoList= [...todos, { input:newTodo,complete:false }]
  setTodos(newTodoList)


}  

function handleCompleteTodo(index){
  let newTodoList = [...todos]
  let completedTodo = { ...todos[index] } 
  completedTodo.complete = true
  newTodoList[index] = completedTodo
  setTodos(newTodoList)
}


function handleDeleteTodo(index){
  let newTodoList = todos.filter((val, valIndex)=> {
    return valIndex !== index
  })
  setTodos(newTodoList)
  
} 


  return (
    <>
      
      <Header todos={todos}/> 
      <Tabs 
      selectedTab={selectedTab} 
      setSelectedTab={setSelectedTab} 
      todos={todos} 
      />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo}  selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo} />


    </>
  )
}

export default App