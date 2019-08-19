import { callApi } from "../../../../utils/api";

export const TOURNAMENTS_REQUEST = 'TOURNAMENTS_REQUEST'
export const TOURNAMENTS_SUCCESS = 'TOURNAMENTS_SUCCESS'
export const TOURNAMENTS_FAILURE = 'TOURNAMENTS_FAILURE'

const tournamentRequest = () => ({
  type: TOURNAMENTS_REQUEST
})

const tournamentSuccess = payload => {
  const tournaments = payload.filter(({ type: featuredElementType }) => featuredElementType === 'tournament')
  return {
    type: TOURNAMENTS_SUCCESS,
    tournaments
  }
}

const tournamentFailure = error => ({
  type: TOURNAMENTS_FAILURE,
  error
})

const getAllTournaments = () => {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/featured/`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  console.log('calling call api')
  return callApi(config, tournamentRequest, tournamentSuccess, tournamentFailure);
}


export {
  getAllTournaments
}