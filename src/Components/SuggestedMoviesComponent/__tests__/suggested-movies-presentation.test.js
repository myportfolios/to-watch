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
    <FilterMoviesComponent
      trendyMoviesHandler={props.trendyMoviesHandler}
      oscarsMoviesHandler={props.oscarsMoviesHandler}
      showOscars={props.showOscars}
      setShowOscars={props.setShowOscars}
      atTheCinemasHandler={props.atTheCinemasHandler}
      latestMoviesHandlers={props.latestMoviesHandlers}
      isLatestMoviesCalled={props.isLatestMoviesCalled}
      isTrendyMoviesCalled={props.isTrendyMoviesCalled}
      isOscarMovies2012Called={props.isOscarMovies2012Called}
      isAtTheCinemas={props.isAtTheCinemas}
      oscars_2012={props.oscars_2012}
      setOscars_2012={props.setOscars_2012}
      oscars_2011={props.oscars_2011}
      setOscars_2011={props.setOscars_2011}
      oscars_2010={props.oscars_2010}
      setOscars_2010={props.setOscars_2010}
      oscars_2009={props.oscars_2009}
      setOscars_2009={props.setOscars_2009}
    />
  );

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapperSuggestedMoviesGallery).toMatchSnapshot();
    expect(wrapperFilterMoviesComponent).toMatchSnapshot();
  });
  it("triggers trendyMoviesHandler fn when `filter-movies-component` is clicked", () => {
    wrapperFilterMoviesComponent
      .find(".menu-items")
      .first() //runs on the first node. You can also use `.at(0)`
      .simulate("click");
    expect(props.trendyMoviesHandler).toHaveBeenCalled();
    expect(props.setOscars_2012).toHaveBeenCalledWith(false);
    expect(props.setOscars_2011).toHaveBeenCalledWith(false);
    expect(props.setOscars_2010).toHaveBeenCalledWith(false);
    expect(props.setOscars_2009).toHaveBeenCalledWith(false);
    expect(props.setShowOscars).toHaveBeenCalledWith(false);
  });
});
