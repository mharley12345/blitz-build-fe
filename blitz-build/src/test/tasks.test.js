import React from 'react';
import { shallow } from 'enzyme';

import  Tasks  from '../views/tasks/Tasks'



it('renders without crashing', () => {
   expect(1).toBe(1);
});

describe("Tasks", () => {
   it("renders", () => {
     shallow(<Tasks />)
   });
 });
 