import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE
} from "../actions/profile";

const initialState = {
  data: {},
  gettingProfile: false,
  gettingProfileError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function profile(state = initializeState(), action = {}) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return Object.assign({}, state, {
        gettingProfile: true,
        gettingProfileError: null
      });
    case PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.profile,
        gettingProfile: false,
        gettingProfileError: null
      });
    case PROFILE_FAILURE:
      return {
        ...state,
        gettingProfile: false,
        gettingProfileError: action.error
      };
    default:
      return state;
  }
}
