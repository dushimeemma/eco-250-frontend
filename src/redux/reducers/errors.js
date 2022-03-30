import { types } from '../actions/types';

const initialState = {
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
