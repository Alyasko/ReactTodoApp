import React, { Component } from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from './actions';
import { removeTodo, checkTodo } from './actions';

class VisibleTodoList extends Component {
  constructor(props) {
    super(props);

    this.deleteTodoHandler.bind(this);
    this.deleteTodoHandler.bind(this);
  }

  deleteTodoHandler(id) {
    this.props.dispatch(removeTodo(id));
  }

  toggleTodoHandler(id) {
    this.props.dispatch(checkTodo(id));
  }

  runFilter = (todos, filter) => {
    switch (filter) {
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

  render() {
    let { todos, filter } = this.props;

    const visibleTodos = this.runFilter(todos, filter);

    return (
      <TodoList
        todos={visibleTodos}
        onTodoDeleted={(id) => this.deleteTodoHandler(id)}
        onTodoToggled={(id) => this.toggleTodoHandler(id)}
      />
    )
  }
}

const mapsStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibilityFilter
});

export default connect(mapsStateToProps)(VisibleTodoList);

