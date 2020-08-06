import React, { useState, useEffect } from 'react';
import Context from './shared/context';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const API = 'https://jsonplaceholder.typicode.com';
        fetch(`${API}/todos?_limit=5`)
            .then(response => response.json())
            .then(todos => setTodos(todos));
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat({
                title,
                id: Date.now(),
                completed: false,
            }),
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React tutorial</h1>

                <AddTodo onCreate={addTodo} />

                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
