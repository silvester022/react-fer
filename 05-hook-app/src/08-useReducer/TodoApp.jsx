import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks'

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, onDeleteTodo, onToggleTodo, onNewTodo } = useTodo()

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList 
            todos={todos} 
            onDeleteTodo={id => onDeleteTodo(id)}
            onToggleTodo={id => onToggleTodo(id)} />
        </div>

        <div className="col-5">

          
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd 
            onNewTodo={(todo) => onNewTodo(todo)} />
        </div>
      </div>

    </>
  )
}