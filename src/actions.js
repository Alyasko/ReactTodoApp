export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHECK_TODO = "CHECK_TODO";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const FILTER = "FILTER";

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

export const filterTodos = (filter) => ({
  type: FILTER,
  filter
});

