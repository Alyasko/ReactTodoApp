import React from 'react';
import AddTodo from './AddTodo';
import Filters from './Filters';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filters />
  </div>
);

export default App;

