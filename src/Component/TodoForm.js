import { useState } from 'react'

import config from '../config'
import axios from 'axios'

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");//input ke liy hai..!
    const addTodo =  () => {
        if (todo !== null)
            axios
                .post(config.apiUrl, { content: todo })
                .then((response) => {
                    console.log(response.data)//information jo api (api ka data show krne ke liy..!)
                    setTodo("");
                    props.refresh();
                })
                .catch((error) => alert(JSON.stringify(error)))//error show ke liy

    }

 

    return (
        <div className="todo-form mt-3">
            <input
                className="form-control"
                id="todo-form"
                type="text"
                placeholder="Add your new todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button className="btn btn-info" onClick={addTodo}>
                <i className="fas fa-plus" />
            </button>
        </div>
    )
}

export default TodoForm
