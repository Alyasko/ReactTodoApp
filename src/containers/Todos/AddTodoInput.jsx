import { connect } from 'react-redux';
import { addTodo } from './actions';
import AddInput from '../../components/AddInput/AddInput';

const mapDispatchToProps = (dispatch) => ({
  onAdd: (text) => {
    dispatch(addTodo(text))
  }
});

const AddTodoInput = connect(null, mapDispatchToProps)(AddInput)

export default AddTodoInput;

