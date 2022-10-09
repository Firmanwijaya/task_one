import * as ACTION from "./actions";
import initialState from "./initialState"

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};

export default reducers;
