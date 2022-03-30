import { types } from './types';

export const getErrors = (message) => {
  return {
    type: types.GET_ERRORS,
    payload: message,
  };
};
