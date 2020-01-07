import { createContext, useContext } from "react";

const templateContext = createContext();
export const useTemplateContext = () => useContext(templateContext);
export default templateContext;
