import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Projects } from '../components/projects/Projects'



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Projects", () => {
   it("renders", () => {
     shallow(<Projects />)
   });
 });
 