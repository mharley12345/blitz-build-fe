import React from 'react';
import { useTestProjectContext } from './testProjectContext';

const TestProjects = props => {
  const { projects } = useTestProjectContext();
  return <h1>This is your project: {projects}</h1>;
};

export default TestProjects;
