import { HTTP_METHODS } from "./constants";
import { getActionTypes } from "store/reducers/reducer-constants";
// import {getJWTToken} from './utils';
import { getApiUrl } from "services/config";

//Fetch options (date, method, etc)

const options = (data, method, noCache) => {
  // const token = getJWTToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  // headers.append("Authorization", "Bearer" + token);
  noCache && headers.append("cache-control", "no-cache");

  return {
    // body:data ? JSON.stringify(data) : undefined,// must match 'Content-Type header /**commented out "body" */
    //credentials: :"same-origin", //include, same-origin, "omit"
    headers,
    method //*GET,POST,PUT,DELETE, etc
    //mode:"cors" //no-cors, cors, *same-origin
    //redirect: "follow",//manual, *follow, error
    //referrer: "no-referrer" //*client, no-referrer
  };
};

export const fetchCommon = (
  endpoint,
  reqBody,
  method = HTTP_METHODS.GET,
  noCache = false
) => async (
  dispatch = ({ type = "", payload = null }) => {},
  actionKey = ""
) => {
  // 1. check if endpoint format is correct
  if (typeof endpoint !== "string") {
    return Promise.reject("specify a string endpoint URL.");
  }
  // 2. Extraxt action key and dispatch fetching (display spinner if needed)
  const ACTION_TYPES = getActionTypes(actionKey);
  dispatch({ type: ACTION_TYPES.FETCHING });

  //3. Call API
  const API_ROOT = getApiUrl();
  const fullUrl =
    !endpoint.startsWith("http") && endpoint.indexOf(API_ROOT) === -1
      ? API_ROOT + endpoint
      : endpoint;
  try {
    const response = await fetch(fullUrl, options(reqBody, method, noCache));
    const jsonData = await response.json();
    // 4. Check if response status is ok
    if (!response.ok) {
      //5. throw response if it's not json format, else throw json data
      throw !jsonData ? response : jsonData;
    }
    // 6. send data to dispatch
    dispatch({ type: ACTION_TYPES.FULFILLED, payload: jsonData });
    //return resolved promise
    return jsonData;
  } catch (error) {
    //handle error object
    const retError = parsingErrorObj(error);
    dispatch({
      type: ACTION_TYPES.REJECTED,
      payload: retError
    });
    return retError;
  }
};

/**
 * Reformat the Error object
 * @param {object} respError
 * @return error object always contains "notifications" array. E.g: {notifications: [....]}
 */

export const parsingErrorObj = respError => {
  let retError;
  if (
    respError &&
    respError.notifications &&
    respError.notifications.length > 0 &&
    respError.notifications[0] !== undefined
  ) {
    retError = respError;
  } else if (respError && respError.status) {
    retError = {
      notifications: [
        {
          code: respError.status.toString(),
          message:
            respError.description || respError.message || respError.statusText
        }
      ]
    };
  } else {
    retError = {
      notifications: [
        {
          message:
            respError.description || respError.message || respError.toString()
        }
      ]
    };
  }
  return retError;
};
/**
 * if notification containe "Warning", it should consider as "200 with no error".
 * UI does not need to know error,it should allow user continue to the next page
 * @param {object} list of notifications
 * @return Return true if all notifications contain Warning, else return false.
 *
 * Scenario 1: if notifications contain more than 1 notifications(i.e 2).
 * Notifications_1: {..., sverity: "WARNING",...}
 * Notification_2: {..., severity: "Error", ...}
 * shouldIgnoreError should return false.
 *
 * Scenario 2: if notifications contain more than 1 notifications(i.e 2).
 * Notifications_1: {..., sverity: "WARNING",...}
 * Notification_2: {..., severity: "WARNING", ...}
 * shouldIgnoreError should return true.
 */

export const shouldIgnoreError = notifications => {
  let nonWarningCount = 0;
  notifications.forEach(n => {
    if (n.severity !== "WARNING") {
      nonWarningCount++;
    }
  });
  return nonWarningCount === 0;
};
