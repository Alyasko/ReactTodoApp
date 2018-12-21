import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './action-types';

export const addTodo = (list, text) => {
  let ids = list.map(x => x.id);
  let id = 0;
  if(ids.length === 0) {
    id = 0;
  } else {
    id = Math.max(...ids) + 1;
  }

  console.log({ids, id});

  return ({
    type: ADD_TODO,
    text,
    id
  });
};

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  id
});