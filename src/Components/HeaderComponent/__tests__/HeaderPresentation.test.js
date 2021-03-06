import { shallow } from "enzyme";
import HeaderPresentation from "../HeaderPresentation";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("HeaderPresentation", () => {
  const wrapper = shallow(<HeaderPresentation />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
