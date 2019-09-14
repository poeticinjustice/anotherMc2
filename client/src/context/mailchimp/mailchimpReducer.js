import {
  GET_REPORTS,
  SET_LOADING,
  REPORTS_ERROR,
  GET_SPECIFIC
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_REPORTS:
      return {
        ...state,
        reports: action.payload,
        loading: false
      };
    case GET_SPECIFIC:
      return {
        ...state,
        specific: action.payload,
        loading: false
      };
    case REPORTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
