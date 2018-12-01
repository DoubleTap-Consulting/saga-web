import { nonActionApiWithJWT } from "./api";

/**
 * Check if username is taken
 */
export function checkUsername(username) {
  // TODO: complete API call
  const settings = {
    url: `/user/username`,
    method: "GET",
    headers: {
      enctype: "multipart/form-data",
      AccessControlAllowOrigin: "*",
      cacheControl: "no-cache"
    }
  };
  return nonActionApiWithJWT(settings).then(response => {
    console.log("response", response);
    return false;
  });
}
