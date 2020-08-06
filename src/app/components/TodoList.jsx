import React from 'react';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};

export default function TodoList({ todos }) {
    return (
        <ul style={styles.ul}>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        <TodoItem todo={todo} index={index} />
                    </li>
                );
            })}
        </ul>
    );
}
