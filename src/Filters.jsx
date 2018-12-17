import React from 'react';
import Filter from './Filter';
import * as actions from './actions';

const Filters = () => {

  return (
    <p>
      Show: {' '}
      <Filter filter={actions.SHOW_ALL}>All</Filter>
      <Filter filter={actions.SHOW_ACTIVE}>Active</Filter>
      <Filter filter={actions.SHOW_COMPLETED}>Completed</Filter>
    </p>
  );
}

export default Filters;