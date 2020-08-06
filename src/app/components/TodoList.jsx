import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};

function TodoList({ todos, onToggle }) {
    return (
        <ul style={styles.ul}>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        <TodoItem todo={todo} index={index} onChange={onToggle} />
                    </li>
                );
            })}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;
