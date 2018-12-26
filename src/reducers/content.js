import {
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  CONTENT_FAILURE
} from "../actions/content";

const initialState = {
  content: [],
  gettingContent: false,
  gettingContentError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case CONTENT_REQUEST:
      return Object.assign({}, state, {
        gettingContent: true,
        gettingContentError: null
      });
    case CONTENT_SUCCESS:
      return Object.assign({}, state, {
        content: action.content,
        gettingContent: false,
        gettingContentError: null
      });
    case CONTENT_FAILURE:
      return {
        ...state,
        content: null,
        gettingContent: false,
        gettingContentError: action.error
      };
    default:
      return state;
  }
}
