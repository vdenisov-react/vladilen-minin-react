import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Context from './shared/context';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, completed: false, title: 'Buy milk' },
        { id: 2, completed: true, title: 'Buy bread' },
        { id: 3, completed: false, title: 'Buy butter' },
    ]);

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

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React tutorial</h1>

                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
