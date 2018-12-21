import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './action-types';

export const todosList = [
  {
    id: 0,
    text: "Oranges",
    checked: false
  },
  {
    id: 1,
    text: "Bread",
    checked: false
  },
  {
    id: 2,
    text: "Milk",
    checked: false
  },
  {
    id: 3,
    text: "Oil",
    checked: false
  },
  {
    id: 4,
    text: "Apples",
    checked: false
  }
];

export const addTodo = (text) => {
  let ids = todosList.map(x => x.id);
  let id = 0;
  if(ids.length === 0) {
    id = 0;
  } else {
    id = Math.max(...ids) + 1;
  }

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