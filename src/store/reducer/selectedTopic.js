import { SET_SELECTED_TOPIC_ID } from '../actions';

// default state
const initialState = null;
// Reducer
const selectedTopicReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_SELECTED_TOPIC_ID:
      return payload.topicId;
    default:
      return state;
  }
};

export default selectedTopicReducer;
