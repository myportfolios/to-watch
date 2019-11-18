import { shallow } from "enzyme";
import SuggestedMoviesPresentation, {
  FilterMoviesComponent,
  SuggestedMoviesGallery
} from "../SuggestedMoviesPresentation";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("SuggestedMoviesPresentation", () => {
  const props = {
    atTheCinemas: [
      {
        title: "abc"
      }
    ],
    latestMovies: [
      {
        title: "abcde"
      }
    ],
    fetching: false,
    randomMovies: [
      {
        title: "abcfg"
      }
    ],
    trendyMoviesHandler: jest.fn(),
    latestMoviesHandlers: jest.fn(),
    isLatestMoviesCalled: false,
    isTrendyMoviesCalled: false,
    isOscarMovies2012Called: false,
    oscarsMoviesHandler: jest.fn(),
    atTheCinemasHandler: jest.fn(),
    isAtTheCinemas: false,

    setOscars_2012: jest.fn(),
    setOscars_2011: jest.fn(),
    setOscars_2010: jest.fn(),
    setOscars_2009: jest.fn(),
    setShowOscars: jest.fn(),
    nomination: "",
    ListOfMovies: []
  };
  const wrapper = shallow(<SuggestedMoviesPresentation {...props} />);
  const wrapperSuggestedMoviesGallery = shallow(
    <SuggestedMoviesGallery {...props} />
  );
  const wrapperFilterMoviesComponent = shallow(
    <wrapperFilterMoviesComponent {...props} />
  );
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapperSuggestedMoviesGallery).toMatchSnapshot();
    expect(wrapperFilterMoviesComponent).toMatchSnapshot();
  });
  it("triggers trendyMoviesHandler when `filter-movies-component` is clicked", () => {
    wrapperFilterMoviesComponent.simulate("click");
    expect(
      wrapperFilterMoviesComponent.instance().trendyMoviesHandler
    ).toHaveBeenCalled();
  });
});
