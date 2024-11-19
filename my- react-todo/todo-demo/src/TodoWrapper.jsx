import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
    const [todos, setTodos] = useState([
        { content: "L1", id: 1 ,isCompleted:false},
        { content: "L2", id: 2 ,isCompleted:false},
    ]);

    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(),isCompleted:false}]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo

        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo}/>
            {todos.map((todo) => {
                return <Todo  todo={todo} key={todo.id} 
                    deleteTodo = {deleteTodo} toggleCompleted = {toggleCompleted}/>;
            })}
        </div>
    );
}

export default TodoWrapper;
