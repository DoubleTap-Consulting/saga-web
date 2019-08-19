import { callApi } from "../../../../utils/api";

export const PLAYERS_REQUEST = 'PLAYERS_REQUEST'
export const PLAYERS_SUCCESS = 'PLAYERS_SUCCESS'
export const PLAYERS_FAILURE = 'PLAYERS_FAILURE'

const playerRequest = () => ({
  type: PLAYERS_REQUEST
})

const playerSuccess = payload => {
  const players = payload.filter(({ type: featuredElementType }) => featuredElementType === 'player')
  return {
    type: PLAYERS_SUCCESS,
    players
  }
}

const playerFailure = error => ({
  type: PLAYERS_FAILURE,
  error
})

const getAllPlayers = () => {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/featured/`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return callApi(config, playerRequest, playerSuccess, playerFailure);
}


export {
  getAllPlayers
}