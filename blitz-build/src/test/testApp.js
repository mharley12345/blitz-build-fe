import React from 'react';
import testProjectContext from './testProjectContext';
import TestProjects from './testProjects';

export default function App() {
  return (
    <testProjectContext.Provider value={{ project: 'project1' }}>
      <TestProjects/>
    </testProjectContext.Provider>
  );
}
