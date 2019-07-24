/**************************************************/
/*Action and Reducer Keys*/
/**************************************************/

export const getActionTypes = actionKey => {
    return {
        FETCHING: `${actionKey}_fetching`,
        FULFILLED: `${actionKey}_fulfilled`,
        REJECTED: `${actionKey}_rejected`,
    };
};

//API  related actions
export const ACTION_KEY_GET_SELECTED_MOVIES = "get_selected_movies";
export const ACTION_KEY_GET_LATEST_MOVIES = "get_latest_movies";
export const ACTION_KEY_ACTION_THREE = "get_action_three";
export const ACTION_KEY_ACTION_FOUR = "get_action_four";

//User  related actions

//CONFIGURATION API//
export const BASE_URL = "http://image.tmdb.org/t/p/";
export const POSTER_SIZES = "w500";