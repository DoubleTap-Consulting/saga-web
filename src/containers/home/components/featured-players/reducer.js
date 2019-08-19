import {
  FEATURED_PLAYERS_REQUEST,
  FEATURED_PLAYERS_SUCCESS,
  FEATURED_PLAYERS_FAILURE
} from "./actions";

const initialState = {
  players: [],
  gettingFeaturedPlayers: false,
  gettingFeaturedPlayersError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function featuredPlayers(
  state = initializeState(),
  action = {}
) {
  switch (action.type) {
    case FEATURED_PLAYERS_REQUEST:
      return Object.assign({}, state, {
        gettingFeaturedPlayers: true,
        gettingFeaturedPlayersError: null
      });
    case FEATURED_PLAYERS_SUCCESS:
      return Object.assign({}, state, {
        players: action.players,
        gettingFeaturedPlayers: false,
        gettingFeaturedPlayersError: null
      });
    case FEATURED_PLAYERS_FAILURE:
      return {
        ...state,
        players: null,
        gettingFeaturedPlayers: false,
        gettingFeaturedPlayersError: action.error
      };
    default:
      return state;
  }
}
