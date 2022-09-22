import { createContext } from "react";

type ContextProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchContext = createContext<ContextProps>({
  search: "",
  setSearch: () => undefined,
});

export default SearchContext;
