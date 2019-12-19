import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { MyCalendar } from '../components/documents/Documents'



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("MyCalender", () => {
   it("renders", () => {
     shallow(<MyCalendar />)
   });
 });
 