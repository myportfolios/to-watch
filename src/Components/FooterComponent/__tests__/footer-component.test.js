import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import FooterComponent from "../FooterComponent";

configure({ adapter: new Adapter() });

describe("FooterComponent", () => {
  let props;
  const wrapper = shallow(<FooterComponent {...props} />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
