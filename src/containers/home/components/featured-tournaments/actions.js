import { callApi } from "utils/api";

export const FEATURED_TOURNAMENTS_REQUEST = "FEATURED_TOURNAMENTS_REQUEST";
export const FEATURED_TOURNAMENTS_SUCCESS = "FEATURED_TOURNAMENTS_SUCCESS";
export const FEATURED_TOURNAMENTS_FAILURE = "FEATURED_TOURNAMENTS_FAILURE";

const featuredTournamentRequest = () => ({
  type: FEATURED_TOURNAMENTS_REQUEST
});

const featuredTournamentSuccess = payload => {
  const tournaments = payload.filter(
    ({ type: featuredElementType }) => featuredElementType === "tournament"
  );
  return {
    type: FEATURED_TOURNAMENTS_SUCCESS,
    tournaments
  };
};

const featuredTournamentFailure = error => ({
  type: FEATURED_TOURNAMENTS_FAILURE,
  error
});

const getFeaturedTournaments = () => {
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
    featuredTournamentRequest,
    featuredTournamentSuccess,
    featuredTournamentFailure
  );
};

export { getFeaturedTournaments };
