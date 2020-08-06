import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, completed: false, title: 'Buy milk' },
        { id: 2, completed: false, title: 'Buy bread' },
        { id: 3, completed: false, title: 'Buy butter' },
    ]);

    function toggleTodo(id) {
        console.log('todo id =>', id);
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        );
    }

    return (
        <div className="wrapper">
            <h1>React tutorial</h1>

            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    );
}

export default App;
