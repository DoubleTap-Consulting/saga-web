/**
 * Contents
 * 1. Marketplace
 */

import { callApi } from "../utils/api";

export const MARKETPLACE_REQUEST = "MARKETPLACE_REQUEST";
export const MARKETPLACE_SUCCESS = "MARKETPLACE_SUCCESS";
export const MARKETPLACE_FAILURE = "MARKETPLACE_FAILURE";

/**
 * Calls the marketplace API.
 * @returns {object} The marketplace object returned by the server.
 */
export function getMarketplace(email, password) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/marketplace`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(
    config,
    marketplaceRequest(email),
    marketplaceSuccess,
    marketplaceFailure
  );
}

function marketplaceRequest() {
  return {
    type: MARKETPLACE_REQUEST
  };
}

function marketplaceSuccess(payload) {
  if (payload.marketplace) {
    return {
      type: MARKETPLACE_SUCCESS,
      marketplace: payload.marketplace
    };
  }
  return {
    type: MARKETPLACE_FAILURE,
    error: payload.error
  };
}

function marketplaceFailure(error) {
  if (error) {
    return {
      type: MARKETPLACE_FAILURE,
      error
    };
  }
  return {
    type: MARKETPLACE_FAILURE,
    error
  };
}
