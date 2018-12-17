import React from 'react';
import FilterButton from './FilterButton';
import * as actions from './actions';

const Filters = () => {

  return (
    <p>
      Show: {' '}
      <FilterButton filter={actions.SHOW_ALL}>All</FilterButton>
      <FilterButton filter={actions.SHOW_ACTIVE}>Active</FilterButton>
      <FilterButton filter={actions.SHOW_COMPLETED}>Completed</FilterButton>
    </p>
  );
}

export default Filters;