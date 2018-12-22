import React from 'react';

import './todo.scss';

const Todo = ({
  checked,
  text,
  onTodoToggled,
  onTodoDeleted
}) => {
  return (
    <li>
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }} onClick={onTodoToggled}>{text}</span>
      <div className="flex-fill"></div>
      <button onClick={onTodoDeleted}>X</button>
    </li>
  )
};

export default Todo;
