import { createContext, useContext } from 'react';

const SearchTermContext = createContext('');
export const useSearchTermContext = () => useContext(SearchTermContext);

export default SearchTermContext;