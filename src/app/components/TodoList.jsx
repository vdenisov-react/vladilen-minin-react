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
            <TodoItem todo={todos[0]} />
            <TodoItem todo={todos[1]} />
            <TodoItem todo={todos[2]} />
        </ul>
    );
}
