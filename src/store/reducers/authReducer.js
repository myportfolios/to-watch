import {
  ACTION_KEY_SIGN_IN,
  ACTION_KEY_SIGN_OUT
} from "store/reducers/reducer-constants";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_KEY_SIGN_IN:
      const { userId, userName } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        isSignedIn: true,
        userId,
        userName
      };
    case ACTION_KEY_SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    default:
      return state;
  }
};
