import * as actions from './actions';

const initialState = [
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

const todo = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return {
        id: action.id,
        text: action.text
      };
    }
    case actions.CHECK_TODO: {
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        checked: !state.checked
      }
    }
    default:
      return state;
  }
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [
        ...state,
        todo(undefined, action)
      ];
    }
    case actions.REMOVE_TODO: {
      let id = state.findIndex(x => x.id === action.id);
      return [
        ...state.slice(0, id),
        ...state.slice(id + 1)
      ];
    }
    case actions.CHECK_TODO: {
      return state.map(x => todo(x, action));
    }
    default:
      return state;
  }
};

export const visibilityFilter = (state = actions.SHOW_ALL, action) => {
  switch(action.type) {
    case actions.FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
};
