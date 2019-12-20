
import React from 'react';
import { shallow } from 'enzyme';
import * as TestProjectContext from './testProjectContext';
import TestProjects from './testProjects';
import * as ProjectContext from '../contexts/projects/ProjectContext'
import Projects from '../components/projects/Projects'


describe('<TestProjects />', () => {
  test('it should mock the context', () => {
    const contextValues = { projects: 'project1' };
    jest
      .spyOn(TestProjectContext, 'useTestProjectContext' )
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<TestProjects />);
    const h1 = wrapper.find('h1');

    expect(h1.text()).toBe('This is your project: project1');
  });
});

describe('<Projects />', () => {
  test('it should mock the context', () => {
    const contextValues = { projects: ['project1', 'project2'] };
    
    jest
      .spyOn(ProjectContext, 'useProjectContext' )
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Projects />);
   
  });
});

