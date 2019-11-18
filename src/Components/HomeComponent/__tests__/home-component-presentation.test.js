import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomeComponentPresentation from "../HomeComponentPresentation";
import { MovieAndTitleComponent } from "../HomeComponentPresentation";

configure({ adapter: new Adapter() });

describe("HomeComponentPresentation", () => {
  const wrapper = shallow(<HomeComponentPresentation />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("MovieAndTitleComponent", () => {
  const props = {
    movies: [
      {
        title: "Unit Testing"
      }
    ]
  };
  const wrapperMovieAndTitleComponent = shallow(
    <MovieAndTitleComponent {...props} />
  );
  it("renders correctly", () => {
    expect(wrapperMovieAndTitleComponent).toMatchSnapshot();
  });
  it("returns a list of images when page renders", () => {
    expect(wrapperMovieAndTitleComponent.children().length).toEqual(1);
  });
});
