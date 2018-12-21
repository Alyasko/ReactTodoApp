import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.buttonClickHandler.bind(this);
  }

  buttonClickHandler(text) {
    if (text !== '') {
      this.props.dispatch(addTodo(this.props.todos, text));
      this.input.value = '';
    }
  }

  render() {
    return (
      <div>
        <input ref={node => { this.input = node }} />
        <button onClick={() => this.buttonClickHandler(this.input.value)}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(AddTodo);

