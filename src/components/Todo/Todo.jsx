import React from 'react';

import './todo.scss';

const Todo = ({
  checked,
  text,
  onTodoToggled,
  onTodoDeleted
}) => {
  return (
    <li className={"todo-item " + (checked ? 'checked': '')} onClick={onTodoToggled}>
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{text}</span>
      <div className="flex-fill"></div>
      <a href="/" className="delete-todo" onClick={(e) => {
        onTodoDeleted();
        e.preventDefault();
      }}><i className="fas fa-trash"></i></a>
    </li>
  )
};

export default Todo;
