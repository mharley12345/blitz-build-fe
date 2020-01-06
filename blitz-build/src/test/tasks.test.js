import React from 'react';
import { shallow } from 'enzyme';
import * as TaskContext from '../contexts/tasks/TaskContext'
import * as SearchTermContext from '../contexts/searching/searchTerm'
import styled, { css } from "styled-components";
import  Tasks  from '../views/tasks/Tasks'
import Task  from '../components/dashboard/Task'
import { Text } from '../components/dashboard/Task'


describe('<Tasks />', () => {
  test('it should mock the context', () => {
  
    const contextValues = { searchTerm: 'Electrical', results: [{
      project_name: "TacomaEdit",
      id: 3885,
      user_id: "google-oauth2|117345694816613292954",
      task_name: "Rough Install Electrical",
      task_description: "",
      due_date: "",
      start_date: null,
      createdAt: "2019-12-16T00:00:00.000Z",
      isComplete: false,
      project_id: 2,
      template_id: null,
      template_name: "90_day",
    },
    {
      project_name: "TacomaEdit",
      id: 3909,
      user_id: "google-oauth2|117345694816613292954",
      task_name: "Electrical Trim",
      task_description: "",
      due_date: "",
      start_date: null,
      createdAt: "2019-12-16T00:00:00.000Z",
      isComplete: false,
      project_id: 2,
      template_id: null,
      template_name: "90_day",
    
  }],

   tasks: [{
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
      .spyOn(TaskContext, 'useTaskContext')
      .mockImplementation(() => contextValues);
    jest
      .spyOn(SearchTermContext, 'useSearchTermContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Tasks />);
    const taskWrapper = shallow(<Task item={contextValues.tasks[0]} />);
    const TextFind = taskWrapper.find(Text).at(0);  
    expect(TextFind.text()).toBe('Tacoma')
    const StatusFind = taskWrapper.find('p').at(0);  
    expect(StatusFind.text()).toBe('Unavailable')
    
   
  });
});