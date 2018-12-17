import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from './actions';
import { removeTodo, checkTodo } from './actions';

const runFilter = (todos, filter) => {
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

const mapsStateToProps = (state) => ({
  todos: runFilter(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoDeleted: (id) => dispatch(removeTodo(id)),
  onTodoToggled: (id) => dispatch(checkTodo(id))
});

const VisibleTodoList = connect(mapsStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList;

