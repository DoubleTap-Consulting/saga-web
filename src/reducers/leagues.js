import {
  LEAGUES_REQUEST,
  LEAGUES_SUCCESS,
  LEAGUES_FAILURE
} from "../actions/leagues";

const initialState = {
  leagues: [],
  gettingLeagues: false,
  gettingLeaguesError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case LEAGUES_REQUEST:
      return Object.assign({}, state, {
        gettingLeagues: true,
        gettingLeaguesError: null
      });
    case LEAGUES_SUCCESS:
      return Object.assign({}, state, {
        leagues: action.leagues,
        gettingLeagues: false,
        gettingLeaguesError: null
      });
    case LEAGUES_FAILURE:
      return {
        ...state,
        leagues: null,
        gettingLeagues: false,
        gettingLeaguesError: action.error
      };
    default:
      return state;
  }
}
