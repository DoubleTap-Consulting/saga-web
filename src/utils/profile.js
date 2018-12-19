import { nonActionApiWithJWT } from "./api";

/**
 * Registers a new user with the provided information.
 * @param {object} formData Should contain the email, password, first name, and last name.
 */
export function getUserProfile(gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/user`,
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return nonActionApiWithJWT(config).then(response => {
    return response;
  });
}
