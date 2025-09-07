export function Header(props) {

    const {todos} = props 

    const todosLength= todos.length

    const isTasksPlural= todos.length !=1
    const tasksOrTask = isTasksPlural ? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient"> You have {todosLength} open {tasksOrTask}</h1>
        </header>
    )
}