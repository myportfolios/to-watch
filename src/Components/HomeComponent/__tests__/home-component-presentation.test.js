import React from "react";
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



import HomeComponentPresentation from "../HomeComponentPresentation";
import { MovieAndTitleComponent } from "../HomeComponentPresentation";

describe('HomeComponentPresentation', () => {
    const wrapper = shallow(<HomeComponentPresentation />);
    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    }); 
})


describe('MovieAndTitleComponent', () => {
    const wrapperMovieAndTitleComponent = shallow(<MovieAndTitleComponent />);
    it("renders correctly", () => {
        expect(wrapperMovieAndTitleComponent).toMatchSnapshot();
    });
    it('returns a list of images when page renders', () => {
        expect(wrapperMovieAndTitleComponent.children().length).toEqual(0);
    })
})
