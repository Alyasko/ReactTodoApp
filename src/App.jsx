import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Filters from './Filters';
import VisibleTodoList from './VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Filters />
      </div>
    )
  }
}

export default App;

