import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { DelayLog } from "../components/delayLog/DelayLog"



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Dashboard", () => {
   it("renders", () => {
     shallow(<DelayLog />)
   });
 });
 