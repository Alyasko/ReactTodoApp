import React, { Component } from 'react';
import * as actions from './actions';
import { addTodo, removeTodo, checkTodo } from './actions';
import { connect } from 'react-redux';
import Filter from './Filter';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);

    this.deleteTodoHandler.bind(this);
    this.deleteTodoHandler.bind(this);
  }

  addTodoHandler(text) {
    if (text !== '') {
      this.props.dispatch(addTodo(this.props.todos, text));
    }
  }

  deleteTodoHandler(id) {
    this.props.dispatch(removeTodo(id));
  }

  toggleTodoHandler(id) {
    this.props.dispatch(checkTodo(id));
  }

  render() {
    const runFilter = (todos, filter) => {
      switch(filter) {
        case actions.SHOW_ALL:
          return todos;
        case actions.SHOW_ACTIVE: 
          return todos.filter(x => !x.checked);
        case actions.SHOW_COMPLETED:
          return todos.filter(x => x.checked);
        default:
          throw new Error("Incorrect filter.");
      }
    }
    const visibleTodos = runFilter(this.props.todos, this.props.filter);

    return (
      <div>
        <AddTodo onAddTodo={(text) => this.addTodoHandler(text)} />
        <TodoList 
          todos={visibleTodos}
          onTodoDeleted={(id) => this.deleteTodoHandler(id)}
          onTodoToggled={(id) => this.toggleTodoHandler(id)}
        />
        <p>
          Show: {' '}
          <Filter filter={actions.SHOW_ALL}>All</Filter>
          <Filter filter={actions.SHOW_ACTIVE}>Active</Filter>
          <Filter filter={actions.SHOW_COMPLETED}>Completed</Filter>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibilityFilter
});

export default connect(mapStateToProps)(App);

