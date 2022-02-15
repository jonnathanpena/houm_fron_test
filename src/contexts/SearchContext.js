import { createContext } from "react";

const SearchContext = createContext({
  searchText: undefined,
  setSeachText: undefined
});

export default SearchContext;
