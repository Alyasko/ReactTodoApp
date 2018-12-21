import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({
  todos,
  onTodoToggled,
  onTodoDeleted
}) => (
    <ul>
      {
        todos.map(t => (
          <Todo
            key={t.id}
            checked={t.checked}
            text={t.text}
            onTodoToggled={() => onTodoToggled(t.id)}
            onTodoDeleted={() => onTodoDeleted(t.id)}
          />
        ))
      }
    </ul>
  );

export default TodoList;