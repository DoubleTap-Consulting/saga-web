import {
  PLAYERS_REQUEST,
  PLAYERS_SUCCESS,
  PLAYERS_FAILURE
} from "../actions/players";

const initialState = {
  players: [],
  gettingPlayers: false,
  gettingPlayersError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case PLAYERS_REQUEST:
      return Object.assign({}, state, {
        gettingPlayers: true,
        gettingPlayersError: null
      });
    case PLAYERS_SUCCESS:
      return Object.assign({}, state, {
        players: action.players,
        gettingPlayers: false,
        gettingPlayersError: null
      });
    case PLAYERS_FAILURE:
      return {
        ...state,
        players: null,
        gettingPlayers: false,
        gettingPlayersError: action.error
      };
    default:
      return state;
  }
}
