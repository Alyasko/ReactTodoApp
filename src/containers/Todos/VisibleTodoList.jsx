import TodoList from '../../components/TodoList/TodoList';
import { connect } from 'react-redux';
import * as filters from '../FilterButton/filters';
import { removeTodo, checkTodo } from './actions';

const runFilter = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_ACTIVE:
      return todos.filter(x => !x.checked);
    case filters.SHOW_COMPLETED:
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

