import React from 'react';

const TodoItem = ({ task, completed, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
      <button onClick={() => onDelete(task)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;