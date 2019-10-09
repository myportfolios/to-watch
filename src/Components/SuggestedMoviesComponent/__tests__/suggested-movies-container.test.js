import { shallow } from "enzyme";
import { SuggestedMoviesContainer } from "../../SuggestedMoviesComponent/SuggestedMoviesContainer";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("SuggestedMoviesContainer", () => {
  let props = {
    latestMovies: [
      {
        title: ""
      }
    ],
    trendyMovies: [
      {
        title: ""
      }
    ],
    oscars: [
      {
        title: ""
      }
    ],
    nominationUrl: [
      {
        title: ""
      }
    ],
    fetching: true,
    atTheCinemas: [
      {
        title: ""
      }
    ],
    getLatestMovies: jest.fn(),
    getTrendyFilms: jest.fn(),
    getOscarNominations: jest.fn(),
    saveNominationUrlToStore: jest.fn(),
    getCinemasMovies: jest.fn(),
    setInterval: jest.fn()
  };

  let wrapper = shallow(<SuggestedMoviesContainer {...props} />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
