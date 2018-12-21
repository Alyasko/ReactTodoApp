import React from 'react';

const Todo = ({
  checked,
  text,
  onTodoToggled,
  onTodoDeleted
}) => {
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={(e) => {
        onTodoToggled();
      }} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{text}</span>
      <button style={{ marginLeft: 10 }} onClick={onTodoDeleted}>X</button>
    </li>
  )
};

export default Todo;
