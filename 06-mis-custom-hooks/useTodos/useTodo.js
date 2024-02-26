import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  const onNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
  }

  const onDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const onToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}