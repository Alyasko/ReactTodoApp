import React from 'react';
import AddTodo from './containers/Todos/AddTodoInput';
import Filters from './components/Filters/Filters';
import VisibleTodoList from './containers/Todos/VisibleTodoList';

import './styles/reset.scss';
import './app.scss';

const App = () => (
  <div id="app">
    <div id="header-container">
      <h1>Todo App</h1>
      <AddTodo />
      <Filters />
    </div>
    <VisibleTodoList />
  </div>
);

export default App;

