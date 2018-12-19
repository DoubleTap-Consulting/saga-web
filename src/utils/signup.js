import { nonActionApiWithJWT } from "./api";

/**
 * Check if gamer tag is taken
 */
export function checkGamerTag(gamerTag) {
  // TODO: complete API call
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/users/gamerTag`,
    method: "GET",
    headers: {
      enctype: "multipart/form-data",
      AccessControlAllowOrigin: "*",
      cacheControl: "no-cache"
    }
  };
  return nonActionApiWithJWT(config).then(response => {
    console.log("response", response);
    return false;
  });
}

/**
 * Registers a new user with the provided information.
 * @param {object} formData Should contain the email, password, first name, and last name.
 */
export function registerUser(email, password, gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/users`,
    method: "post",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data: {
      email,
      password,
      gamerTag
    }
  };

  return nonActionApiWithJWT(config).then(response => {
    console.log("res", response);
    return response;
  });
}
