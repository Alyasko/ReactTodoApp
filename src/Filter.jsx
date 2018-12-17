import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTodos } from './actions';


class Filter extends Component {
  constructor(props) {
    super(props);

    this.filter.bind(this);
  }

  filter(filter) {
    this.props.dispatch(filterTodos(filter));
  }

  render() {
    let isEnabled = this.props.currentFilter === this.props.filter;

    return (
      <button disabled={isEnabled} onClick={() => { this.filter(this.props.filter) }}>
        {this.props.children}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(Filter);