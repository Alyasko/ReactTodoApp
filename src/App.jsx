import React from 'react';
import AddTodo from './containers/Todos/AddTodoInput';
import Filters from './components/Filters/Filters';
import VisibleTodoList from './containers/Todos/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filters />
  </div>
);

export default App;

