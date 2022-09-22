import { ReactNode, useContext, useMemo } from "react";

import useExchanges from "../hooks/useExchanges";
import ExchangeContext from "./exchangeContext";
import SearchContext from "./searchContext";

type Props = {
  children: ReactNode;
};

function ExchangeProvider({ children }: Props) {
  const { search } = useContext(SearchContext);
  const { exchanges, loading } = useExchanges({ pageSize: 10 });

  const filteredExchanges = useMemo(() => {
    return exchanges.filter((e) => {
      const text = search.trim().toLowerCase();
      return (
        e.name.toLowerCase().includes(text) ||
        e.country?.toLowerCase().includes(text)
      );
    });
  }, [search, exchanges]);

  return (
    <ExchangeContext.Provider value={{ exchanges: filteredExchanges, loading }}>
      {children}
    </ExchangeContext.Provider>
  );
}

export default ExchangeProvider;
