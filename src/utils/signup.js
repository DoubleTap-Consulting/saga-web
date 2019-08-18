import { nonActionApiWithJWT } from "./api";

/**
 * Check if gamer tag is taken
 */
export function checkGamerTag(gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/auth/gamerTag/${gamerTag}`,
    method: "GET",
    headers: {
      enctype: "multipart/form-data",
      AccessControlAllowOrigin: "*",
      cacheControl: "no-cache"
    }
  };
  return nonActionApiWithJWT(config).then(({ user_exists = false }) => {
    if (user_exists) {
      return true;
    }
    return false;
  });
}

/**
 * Registers a new user with the provided information.
 * @param {object} formData Should contain the email, password, first name, and last name.
 */
export function registerUser(email, password, gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/auth/register`,
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
    return response;
  });
}
