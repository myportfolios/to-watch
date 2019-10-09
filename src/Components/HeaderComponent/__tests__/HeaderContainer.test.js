import { shallow } from "enzyme";
import HeaderContainer from "../HeaderContainer";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("headerContainer", () => {
  let wrapper = shallow(<HeaderContainer />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
