import { suggestedMoviesReducer } from "../moviesReducer";
import { ACTION_KEY_GET_SELECTED_MOVIES } from "store/reducers/reducer-constants";

it("handles action of type `ACTION_KEY_GET_SELECTED_MOVIES` ", () => {
  let initialState = {
    fetching: true,
    error: [],
    data: []
  };
  const action = {
    type: ACTION_KEY_GET_SELECTED_MOVIES,
    payload: [{ data: "1234" }]
  };
  //   let data = initialState.data;
  //   let result = action.payload.data;

  const expectedState = suggestedMoviesReducer(initialState, action);
  expect(expectedState).toEqual({ data: "1234" });
});
