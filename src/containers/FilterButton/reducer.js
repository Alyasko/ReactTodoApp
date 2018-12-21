import * as filters from './filters';
import { FILTER } from './action-types';

const visibilityFilter = (state = filters.SHOW_ALL, action) => {
  switch(action.type) {
    case FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
};

export default visibilityFilter;
