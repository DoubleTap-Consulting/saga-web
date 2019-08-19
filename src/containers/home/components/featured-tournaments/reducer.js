import {
  FEATURED_TOURNAMENTS_REQUEST,
  FEATURED_TOURNAMENTS_SUCCESS,
  FEATURED_TOURNAMENTS_FAILURE
} from "./actions";

const initialState = {
  tournaments: [],
  gettingFeaturedTournaments: false,
  gettingFeaturedTournamentsError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function featuredTournaments(
  state = initializeState(),
  action = {}
) {
  switch (action.type) {
    case FEATURED_TOURNAMENTS_REQUEST:
      return Object.assign({}, state, {
        gettingFeaturedTournaments: true,
        gettingFeaturedTournamentsError: null
      });
    case FEATURED_TOURNAMENTS_SUCCESS:
      return Object.assign({}, state, {
        tournaments: action.tournaments,
        gettingFeaturedTournaments: false,
        gettingFeaturedTournamentsError: null
      });
    case FEATURED_TOURNAMENTS_FAILURE:
      return {
        ...state,
        tournaments: null,
        gettingFeaturedTournaments: false,
        gettingFeaturedTournamentsError: action.error
      };
    default:
      return state;
  }
}
