import { createContext, useContext } from 'react';

//creates context api for projects
const projectContext = createContext();
export const useProjectContext = () => useContext(projectContext);

export default projectContext;