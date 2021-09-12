import { SET_SELECTED_CONTACT_ID } from '../actions';

// default state
const initialState = null;
// Reducer
const selectedContactPageReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_SELECTED_CONTACT_ID:
      return payload.contactId;
    default:
      return state;
  }
};

export default selectedContactPageReducer;
