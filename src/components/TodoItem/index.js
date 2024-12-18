import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-bg-container">
      <p className="description">{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
