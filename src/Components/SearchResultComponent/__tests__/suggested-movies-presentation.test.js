import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import SuggestedMoviesPresentation from '../SuggestedMoviesPresentation';



describe("SuggestedMoviesPresentation", () => {
    let wrapper = shallow(<SuggestedMoviesPresentation />);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('contains at least one component', () => {
        expect(wrapper.find('SuggestedMoviesTable').exists()).toBe(true);
    })
})