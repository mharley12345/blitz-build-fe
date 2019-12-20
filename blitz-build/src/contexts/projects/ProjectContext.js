import { createContext, useContext } from 'react';

const projectContext = createContext();
export const useProjectContext = () => useContext(projectContext);

export default projectContext;