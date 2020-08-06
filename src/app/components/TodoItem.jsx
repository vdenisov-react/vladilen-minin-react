import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, index }) {
    return (
        <span>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
};

export default TodoItem;
