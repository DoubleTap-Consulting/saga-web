import {
  MARKETPLACE_REQUEST,
  MARKETPLACE_SUCCESS,
  MARKETPLACE_FAILURE
} from "../actions/marketplace";

const initialState = {
  marketplace: [],
  gettingMarketplace: false,
  gettingMarketplaceError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case MARKETPLACE_REQUEST:
      return Object.assign({}, state, {
        gettingMarketplace: true,
        gettingMarketplaceError: null
      });
    case MARKETPLACE_SUCCESS:
      return Object.assign({}, state, {
        marketplace: action.marketplace,
        gettingMarketplace: false,
        gettingMarketplaceError: null
      });
    case MARKETPLACE_FAILURE:
      return {
        ...state,
        marketplace: null,
        gettingMarketplace: false,
        gettingMarketplaceError: action.error
      };
    default:
      return state;
  }
}
