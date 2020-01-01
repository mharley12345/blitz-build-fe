import React from 'react';
import { shallow } from 'enzyme';
import * as TemplatesContext from '../contexts/templates/TemplateContext'
import * as PathnameContext from '../contexts/PathnameContext'
import Templates  from '../components/templates/templates'
import { Name }  from '../components/templates/templates'
import styled, { css } from "styled-components";


it('renders without crashing', () => {
   expect(1).toBe(1);
});


const setPathname =(pathname) => {
  return pathname
}

describe('<Templates />', () => {
  test('it should mock the context', () => {
  
    const contextValues = {  setPathname, templates: [{
      template_name: "cool",
      id: 21,
  }],
   template_tasks: [{
      project_name: "Tacoma",
      id: 10075,
      user_id: "google-oauth2|117345694816613292954",
      task_name: "Electrical Meter",
      task_description: "",
      due_date: "",
      start_date: null,
      createdAt: "2019-12-17T00:00:00.000Z",
      isComplete: false,
      project_id: 55,
      template_id: null,
      template_name: "90_day",
    },
      {
        project_name: "Tacoma",
        id: 10074,
        user_id: "google-oauth2|117345694816613292954",
        task_name: "Specialites(towl bars,mirror,ect)",
        task_description: "",
        due_date: "",
        start_date: null,
        createdAt: "2019-12-17T00:00:00.000Z",
        isComplete: false,
        project_id: 55,
        template_id: null,
        template_name: "90_day",
      },
      {
        project_name: "Tacoma",
        id: 10073,
        user_id: "google-oauth2|117345694816613292954",
        task_name: "Electrical Trim",
        task_description: "",
        due_date: "",
        start_date: null,
        createdAt: "2019-12-17T00:00:00.000Z",
        isComplete: false,
        project_id: 55,
        template_id: null,
        template_name: "90_day",
      }
      ] };
    
    jest
      .spyOn(TemplatesContext, 'useTemplateContext')
      .mockImplementation(() => contextValues);
      jest
      .spyOn(PathnameContext, 'usePathnameContext')
      .mockImplementation(() => contextValues);
    // jest
    //   .spyOn(SearchTermContext, 'useSearchTermContext')
    //   .mockImplementation(() => contextValues);
    const Wrapper = shallow(<Templates setPathname = {contextValues.setPathname} template={contextValues.templates[0]}/>);
    const TextFind = Wrapper.find(Name).at(1);  
    expect(TextFind.text()).toBe('cool')

    

   
  });
});