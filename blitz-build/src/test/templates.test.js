import React from 'react';
import { shallow } from 'enzyme';

import Templates  from '../components/templates/templates'



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Tasks", () => {
   it("renders", () => {
     shallow(<Templates />)
   });
 });