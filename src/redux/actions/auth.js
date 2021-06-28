import { types } from './types';

import { getErrors } from './errors';
import axios from './setAxios';

export const register = (user) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const res = await axios.post('/api/auth/signup', user);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(getErrors(error.response.data.error));
  }
};

export const isLoading = () => {
  return {
    type: types.IS_LOADING,
  };
};
