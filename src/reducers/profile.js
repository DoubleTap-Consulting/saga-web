import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  PROFILE_UPDATE_INPUT
} from "../actions/profile";

const initialState = {
  data: {},
  gettingProfile: false,
  gettingProfileError: null,
  updateProfileRequest: false,
  updateProfileError: false
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
    case PROFILE_UPDATE_REQUEST:
      return Object.assign({}, state, {
        updateProfileRequest: true,
        updateProfileError: null
      });
    case PROFILE_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        updateProfileRequest: false,
        updateProfileError: null
      });
    case PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        updateProfile: false,
        updateProfileError: action.error
      };
    case PROFILE_UPDATE_INPUT:
      return Object.assign({}, state, {
        data: {
          ...state.data,
          ...action.dataToUpdate
        }
      });
    default:
      return state;
  }
}
