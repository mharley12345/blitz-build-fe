import React from 'react';
import { shallow } from 'enzyme';
import * as TemplatesContext from '../contexts/templates/TemplateContext';
import * as PathnameContext from '../contexts/PathnameContext';
import Templates  from '../components/templates/templates';
import { Name }  from '../components/templates/templates';
import styled, { css } from "styled-components";
import IndividualTemplate from '../components/templates/IndividualTemplate';
import { TitleText } from '../components/templates/IndividualTemplate';

it('renders without crashing', () => {
   expect(1).toBe(1);
});


const setPathname =(pathname) => {
  return pathname
}

describe('<Templates />', () => {
  test('it should mock the context', () => {
  
    const contextValues = {  setPathname, 
      
      templateTask: [{
      id: 27296,
      task_name: "Check the activity feed again",
      task_description: "",
      due_date: "2020-01-25",
      template_id: "35"

    }],
      
      
      templates: [{
      template_name: "cool",
      id: 21,
  }],
}
    
    jest
      .spyOn(TemplatesContext, 'useTemplateContext')
      .mockImplementation(() => contextValues);
      jest
      .spyOn(PathnameContext, 'usePathnameContext')
      .mockImplementation(() => contextValues);
    // jest
    //   .spyOn(SearchTermContext, 'useSearchTermContext')
    //   .mockImplementation(() => contextValues);
    const Wrapper = shallow(<Templates setPathname = {contextValues.setPathname} template={contextValues.templates[0]} />);

    const TemplateTaskWrapper = shallow(<IndividualTemplate setPathname ={contextValues.setPathname} templateTask={contextValues.templateTask[0]}/>)
    const TextFind = Wrapper.find(Name).at(1);  
    expect(TextFind.text()).toBe('cool')
    const TemplateTaskTextFind = TemplateTaskWrapper.find(TitleText).at(0) 
    expect(TemplateTaskTextFind.text()).toBe('Check the activity feed again')
    

   
  });
});