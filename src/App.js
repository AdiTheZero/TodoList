import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';
import { useEffect, useState } from 'react'

import config from './config'
import axios from 'axios'


function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios
      .get(config.apiUrl)
      .then((response) => setTodos(response.data.reverse()))
      .catch((error) => console.log(error))
  }
  //data screen pr show krne ke liy hai..!

  const completeTodo = (todo) => {

    // !response.data.completed && document.getElementById('tick-sound').play()
    axios
      .put(config.apiUrl + todo._id, { completed: !todo.completed })
      .then((response) => {
        console.log(response.data)
        getTodos();
      })
      .catch((error) => console.log(error))

  }

  const deleteTodo = (id) => {
    axios
      .delete(config.apiUrl + id)
      .then((response) => {
        console.log(response.data)
        getTodos()
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {

    getTodos();
  }, []);
  return (
    <div className="">
      <header className="">
        <section className="container">
          <div className="col-xl-5 col-md-8 px-5 py-3 mt-3 todo-container">
            <p className="todo-title my-2">{'Todo App'}</p>
            <TodoForm refresh={getTodos} />
            <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
