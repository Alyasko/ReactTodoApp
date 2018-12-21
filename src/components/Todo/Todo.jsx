import React from 'react';

const Todo = ({
  checked,
  text,
  onTodoToggled,
  onTodoDeleted
}) => {
  return (
    <li>
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }} onClick={onTodoToggled}>{text}</span>
      <button style={{ marginLeft: 10 }} onClick={onTodoDeleted}>X</button>
    </li>
  )
};

export default Todo;
