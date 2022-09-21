import { ReactNode } from "react";

import useExchanges from "../hooks/useExchanges";
import ExchangeContext from "./exchangeContext";

type Props = {
  children: ReactNode;
};

function ExchangeProvider({ children }: Props) {
  const { exchanges } = useExchanges({ pageSize: 10 });

  return (
    <ExchangeContext.Provider value={{ exchanges }}>
      {children}
    </ExchangeContext.Provider>
  );
}

export default ExchangeProvider;
