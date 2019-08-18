import { nonActionApiWithJWT } from "./api";

export function deleteAccount() {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/users`,
    method: "DELETE",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return nonActionApiWithJWT(config).then(response => {
    return response;
  });
}
