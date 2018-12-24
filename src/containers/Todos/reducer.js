import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from './action-types';
import { initialState } from './actions';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        id: action.id,
        text: action.text
      };
    }
    case CHECK_TODO: {
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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        todo(undefined, action)
      ];
    }
    case REMOVE_TODO: {
      let id = state.findIndex(x => x.id === action.id);
      return [
        ...state.slice(0, id),
        ...state.slice(id + 1)
      ];
    }
    case CHECK_TODO: {
      return state.map(x => todo(x, action));
    }
    default:
      return state;
  }
};

export default todos;