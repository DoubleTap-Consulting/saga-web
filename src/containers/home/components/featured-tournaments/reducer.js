import {
  TOURNAMENTS_REQUEST,
  TOURNAMENTS_SUCCESS,
  TOURNAMENTS_FAILURE
} from './actions';

const initialState = {
  tournaments: [],
  gettingTournaments: false,
  gettingTournamentsError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case TOURNAMENTS_REQUEST:
      return Object.assign({}, state, {
        gettingTournaments: true,
        gettingTournamentsError: null
      });
    case TOURNAMENTS_SUCCESS:
      return Object.assign({}, state, {
        tournaments: action.tournaments,
        gettingTournaments: false,
        gettingTournamentsError: null
      });
    case TOURNAMENTS_FAILURE:
      return {
        ...state,
        tournaments: null,
        gettingTournaments: false,
        gettingTournamentsError: action.error
      };
    default:
      return state;
  }
}
