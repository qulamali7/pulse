import React, { createContext, useState } from "react";
export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return <SearchContext.Provider value={{search,handleSearch}}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
