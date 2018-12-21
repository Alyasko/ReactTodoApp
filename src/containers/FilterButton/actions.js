import { FILTER } from './action-types';

export const filterTodos = (filter) => ({
  type: FILTER,
  filter
});

