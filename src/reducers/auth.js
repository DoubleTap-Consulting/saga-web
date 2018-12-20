import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SAVE_USER_SUCCESS
} from "../actions/auth";

import { loadUserProfile } from "../utils/api";

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  loginError: null
};

function initializeState() {
  const userProfile = {
    user: loadUserProfile()
  };
  return Object.assign({}, initialState, userProfile);
}

export default function auth(state = initializeState(), action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        loggingIn: true,
        loginError: null
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
        loggingIn: false,
        loginError: null
      });
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loggingIn: false,
        loginError: action.error
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
        loginError: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        user: null,
        logoutError: action.error
      };
    case REGISTER_REQUEST:
      return Object.assign({}, state);
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: action.user
      });
    case REGISTER_FAILURE:
      return {
        ...state,
        user: null
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
