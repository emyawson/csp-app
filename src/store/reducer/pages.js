import { FETCH_CMS_REQUEST, FETCH_CMS_SUCCCESS, FETCH_CMS_ERROR } from '../actions';

// default state
const initialState = {
  isLoading: true,
  error: null,
};

// Reducer
const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_CMS_SUCCCESS:
      return {
        ...state, isLoading: false, error: null, ...action.payload,
      };
    case FETCH_CMS_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default topicsReducer;
