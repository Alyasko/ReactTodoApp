import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './action-types';

export const initialState = [
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
  },
  {
    id: 5,
    text: "Nuts",
    checked: false
  },
  {
    id: 6,
    text: "Coffee",
    checked: false
  }
];

let id = initialState[initialState.length - 1];

export const addTodo = (text) => {
  // let ids = initialState.map(x => x.id);
  // let id = 0;
  // if(ids.length === 0) {
  //   id = 0;
  // } else {
  //   id = Math.max(...ids) + 1;
  // }
  id = id + 1;

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