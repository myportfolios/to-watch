import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {
  HomeComponentContainer,
  mapStateToProps
} from "../HomeComponentContainer";

configure({ adapter: new Adapter() });

describe("HomeComponentContainer", () => {
  let props = {
    getSuggestedMovies: jest.fn()
  };

  let wrapper = shallow(<HomeComponentContainer {...props} />);

  it("renders corectly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should mapStateToProps correctly", () => {
    const state = {
      movies: {
        data: [
          {
            test: "test"
          }
        ]
      }
    };
    expect(mapStateToProps(state)).toEqual({
      movies: state.movies.data
    });
  });
});
