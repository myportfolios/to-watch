import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {
  SearchResultContainer,
  mapStateToProps
} from "../SearchResultContainer";

configure({ adapter: new Adapter() });

describe("Search Result Container", () => {
  const props = {
    searchResult: [
      {
        title: "Wake up"
      }
    ]
  };
  let wrapper = shallow(<SearchResultContainer {...props} />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  xit("should mapStateToProps correctly", () => {
    const state = {
      searchMovie: {
        data: [
          {
            title: "wake up"
          }
        ]
      }
    };
    expect(mapStateToProps(state)).toEqual({
      searchResult: state.searchMovie.data
    });
  });
});
