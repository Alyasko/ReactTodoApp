import { connect } from 'react-redux';
import { filterTodos } from './actions';
import Button from './Button';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => dispatch(filterTodos(ownProps.filter))
});

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default FilterButton;