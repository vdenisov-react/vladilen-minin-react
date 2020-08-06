import React from 'react';

export default function TodoItem({ todo, index }) {
    return (
        <span>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
    );
}
