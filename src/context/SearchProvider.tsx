import { ReactNode, useState } from "react";

import SearchContext from "./searchContext";

type Props = {
  children: ReactNode;
};

function SearchProvider({ children }: Props) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
