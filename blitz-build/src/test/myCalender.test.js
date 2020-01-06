import React from 'react';
import { shallow } from 'enzyme';
import * as TaskContext from '../contexts/tasks/TaskContext'
import * as ProjectContext from '../contexts/projects/ProjectContext'
import  MyCalendar  from '../components/calendar/MyCalender'
import { newtask } from  '../contexts/tasks/TaskContext'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

describe('<MyCalender />', () => {
  test('it should mock the context', () => {
  
    const contextValues = { projects: [{
      id: 2,
      project_name: "TacomaEdit",
      baths: null,
      beds: null,
      city: "Memphis",
      start_date: null,
      imageURL: null,
      square_ft: null,
      state: "Tennessee",
      status: "On Schedule",
      street_address: "1711 Glenwood, APT 4",
      zip_code: 38104,
      longitude: -90.0046,
      latitude: 35.1334,
      createdAt: "12/16/2019",
      due_date: "03/15/2020",
      user_id: "google-oauth2|117345694816613292954"},

      {
        id: 54,
        project_name: "MondayTest",
        baths: null,
        beds: null,
        city: "Memphis",
        start_date: null,
        imageURL: null,
        square_ft: null,
        state: "Tennessee",
        status: "On Schedule",
        street_address: "672 S Belvedere APT 4",
        zip_code: 46032,
        longitude: -86.1245,
        latitude: 39.9712,
        createdAt: "12/17/2019",
        due_date: "03/15/2020",
        user_id: "google-oauth2|117345694816613292954" ,
      },
      {
        id: 55,
        project_name: "Tacoma",
        baths: null,
        beds: null,
        city: "Memphis",
        start_date: null,
        imageURL: null,
        square_ft: null,
        state: "Tennessee",
        status: "On Schedule",
        street_address: "1518 eastmoreland ave",
        zip_code: 38126,
        longitude: -90.0424,
        latitude: 35.1255,
        createdAt: "12/17/2019",
        due_date: "03/15/2020",
        user_id: "google-oauth2|117345694816613292954"

      }
      ], 
    
   tasks: [{
      project_name: "Tacoma",
      id: 10075,
      user_id: "google-oauth2|117345694816613292954",
      task_name: "Electrical Meter",
      task_description: "",
      due_date: 12/15/2020,
      start_date: 12/2/2020,
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
      .spyOn(ProjectContext, 'useProjectContext')
      .mockImplementation(() => contextValues);
     
    const Wrapper = shallow(<MyCalendar project={contextValues.projects[0]} task = {contextValues.tasks[0]} eventTitles={contextValues.tasks[0].task_name}/>);

    //Accessing react lifecyle methods
    //Accessing component state
    const recievingTasks = newtask(contextValues.tasks[0])

    expect(recievingTasks).toStrictEqual({
       allDay: true,
       start:new Date(moment(12/15/2020).format("L")),
       end: new Date(moment(12/15/2020).format("L")) ,
       title: "Electrical Meter (Tacoma)"
    })
    

 





  
  });

});