import { callApi } from "utils/api";

export const FEATURED_PLAYERS_REQUEST = "FEATURED_PLAYERS_REQUEST";
export const FEATURED_PLAYERS_SUCCESS = "FEATURED_PLAYERS_SUCCESS";
export const FEATURED_PLAYERS_FAILURE = "FEATURED_PLAYERS_FAILURE";

const featuredPlayerRequest = () => ({
  type: FEATURED_PLAYERS_REQUEST
});

const featuredPlayerSuccess = payload => {
  const players = payload.filter(
    ({ type: featuredElementType }) => featuredElementType === "player"
  );
  return {
    type: FEATURED_PLAYERS_SUCCESS,
    players
  };
};

const featuredPlayerFailure = error => ({
  type: FEATURED_PLAYERS_FAILURE,
  error
});

const getFeaturedPlayers = () => {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/featured/`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return callApi(
    config,
    featuredPlayerRequest,
    featuredPlayerSuccess,
    featuredPlayerFailure
  );
};

export { getFeaturedPlayers };
