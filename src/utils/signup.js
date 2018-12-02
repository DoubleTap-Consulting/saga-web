import { nonActionApiWithJWT } from "./api";

/**
 * Check if gamer tag is taken
 */
export function checkGamerTag(gamerTag) {
  // TODO: complete API call
  const settings = {
    url: `/user/gamerTag`,
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
