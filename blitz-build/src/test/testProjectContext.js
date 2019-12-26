import React, { useContext } from 'react';

export const useTestProjectContext = () => useContext(TestProjectContext);

const defaultValues = { project: 'project1' };
const TestProjectContext = React.createContext(defaultValues);

export default TestProjectContext;
