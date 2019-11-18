import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchResultPresentation from "../SearchResultPresentation";
import { SearchResultTable, SearchInput } from "../SearchResultPresentation";

configure({ adapter: new Adapter() });

describe("SuggestedMoviesPresentation", () => {
  let props = {
    searchMovieHandler: jest.fn(),
    searchResult: [
      {
        title: "Crucifixio"
      }
    ],
    selectedMoviesHandler: jest.fn(),

    moviesCollectionHandler: jest.fn(),
    key: ""
  };
  let wrapper = shallow(<SearchResultPresentation {...props} />);
  let wrapperSearchInput = shallow(<SearchInput {...props} />);
  let wrapperSearchResultTable = shallow(<SearchResultTable {...props} />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapperSearchInput).toMatchSnapshot();
    expect(wrapperSearchResultTable).toMatchSnapshot();
  });

  it("it triggers searchMovieHandler when `enter` is pressed", () => {
    wrapper.setProps({
      key: "enter"
    });
    wrapperSearchInput
      .find(".text-input")
      .simulate("keydown", { key: "enter" });
    expect(props.searchMovieHandler).toHaveBeenCalledWith({ key: "enter" });
  });

  xit("test esle statement and returns null if searchResult is empty", () => {
    wrapperSearchResultTable.setProps({
      searchResult: []
    });
    expect(wrapperSearchResultTable).toEqual({});
  });

  xit("it triggers searchMovieHandler when  `enter` is pressed", () => {
    const event = {
      target: {
        value: "abc"
      }
    };

    wrapperSearchInput
      .find(".text-input")
      .simulate("keydown", { target: { value: "abc" } });

    expect(props.searchMovieHandler).toHaveBeenCalledWith(event);
  });
});
