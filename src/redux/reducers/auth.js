import { types } from '../actions/types';

const initialState = {
  message: '',
  token: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
        isLoading: false,
      };
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
