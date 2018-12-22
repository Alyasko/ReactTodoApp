import React from 'react';
import FilterButton from '../../containers/FilterButton/FilterButton';
import * as filters from '../../containers/FilterButton/filters';

import './filter.scss';

const Filters = () => {

  return (
    <p>
      Show: {' '}
      <FilterButton filter={filters.SHOW_ALL}>All</FilterButton>
      <FilterButton filter={filters.SHOW_ACTIVE}>Active</FilterButton>
      <FilterButton filter={filters.SHOW_COMPLETED}>Completed</FilterButton>
    </p>
  );
}

export default Filters;