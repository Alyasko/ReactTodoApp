import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTodos } from './actions';
import Button from './Button';


class FilterButton extends Component {
  constructor(props) {
    super(props);

    this.buttonClickHandler.bind(this);
  }

  buttonClickHandler(filter) {
    this.props.dispatch(filterTodos(filter));
  }

  render() {
    let { currentFilter, filter, children } = this.props;
    let active = currentFilter === filter;

    return (
      <Button
        active={active}
        onButtonClick={() => this.buttonClickHandler(filter)}
      >
        {children}
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(FilterButton);