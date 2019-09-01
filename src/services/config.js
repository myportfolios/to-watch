const UI_LOCALHOST = "http://localhost:3000";

export function getApiUrl(
  isSkipVersion = false,
  currOrigin = window.location.origin
) {
  let versionNum = isSkipVersion ? "" : "a101/";

  //To use mock server, switch currOrigin to localhost:8000, and use "npm run start:local"
  //const mock_server = "http://localhost:8000";
  //const EDGE_LOCALHOST = "http://localhost:8080";

  //Mapping based on https:

  switch (currOrigin) {
    case UI_LOCALHOST: {
      //return mock_server;
      //return `${EDGE_LOCALHOST}/S{versionNum}`;

      return `${UI_LOCALHOST}/${versionNum}`;
    }
    default:
      return "";
  }
}
