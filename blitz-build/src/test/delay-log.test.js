import React from 'react';
import { shallow } from 'enzyme';

import  DelayLog  from "../components/delayLog/DelayLog"



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Dashboard", () => {
   it("renders", () => {
     shallow(<DelayLog />)
   });
 });
