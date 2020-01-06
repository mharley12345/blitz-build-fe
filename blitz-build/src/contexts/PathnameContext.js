import { createContext, useContext } from 'react';

const PathnameContext = createContext();
export const usePathnameContext = () => useContext(PathnameContext);

export default PathnameContext;