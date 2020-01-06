import React from 'react';
import { shallow } from 'enzyme';

import  Documents  from '../components/documents/Documents'



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Documents", () => {
   it("renders", () => {
     shallow(<Documents />)
   });
 });
 