

const TodoList = (props) => {

  return (
    <>
      <ul className="todo-list mt-3">
        {props.todos.length === 0 ? (
          <li className="todo-empty" />
        ) : (
          props.todos.map((todo) => (
            <li className="mb-2" key={todo._id}>
              <span
                className={
                  todo.completed ? 'checkbox completed-checkbox' : 'checkbox'
                }
                onClick={() => props.completeTodo(todo)}
              />
              <span
                className={
                  todo.completed
                    ? 'todo-content completed-content'
                    : 'todo-content'
                }
              >
                {todo.content}
              </span>
              <div className="todo-control-buttons">

                <span onClick={() => props.deleteTodo(todo._id)}>
                  <i
                    className="far fa-trash-alt"
                    style={{ color: '#e74c3c' }}
                  />
                </span>
              </div>
            </li>
          ))
        )}
      </ul>

    </>
  )
}

export default TodoList
