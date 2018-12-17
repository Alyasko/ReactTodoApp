import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import Filters from './Filters';
import VisibleTodoList from './VisibleTodoList';

class App extends Component {
  addTodoHandler(text) {
    if (text !== '') {
      this.props.dispatch(addTodo(this.props.todos, text));
    }
  }

  render() {
    return (
      <div>
        <AddTodo onAddTodo={(text) => this.addTodoHandler(text)} />
        <VisibleTodoList />
        <Filters />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibilityFilter
});

export default connect(mapStateToProps)(App);

