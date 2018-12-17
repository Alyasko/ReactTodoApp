import React from 'react';

const Todo = ({
  checked,
  text,
  onTodoToggled,
  onTodoDeleted
}) => {
  let isChecked;

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={(e) => {
        isChecked = !e.currentTarget.checked;
        onTodoToggled();
      }} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{text}</span>
      <button style={{ marginLeft: 10 }} onClick={onTodoDeleted}>X</button>
    </li>
  )
};

export default Todo;
