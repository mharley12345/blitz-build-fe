
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import {StyledTableCell} from "../styles/Table/TableStyles"
import { shallow } from 'enzyme';
import * as ProjectContext from '../contexts/projects/ProjectContext'
import Projects from '../views/projects/Projects'



describe('<Projects />', () => {
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
      ] };
    
    jest
      .spyOn(ProjectContext, 'useProjectContext' )
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Projects />);
   
    const p = wrapper.find('p').at(2);
  

    expect(p.text()).toBe('Memphis, Tennessee 38104');

   
  });
});

describe('material UI <Projects/>', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow(); 
  });

  it('should work', () => {
    const wrapperMaterialUI = shallow(<Projects />);
    const StyledTableCellFind = wrapperMaterialUI.find(StyledTableCell).at(8)
    expect(StyledTableCellFind.text()).toBe('12/16/2019');
  });
});