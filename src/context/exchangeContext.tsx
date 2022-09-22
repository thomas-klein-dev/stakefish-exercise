import { createContext } from "react";

import ExchangePreview from "../models/exchangePreview";

type ContextProps = {
  exchanges: ExchangePreview[];
  loading: boolean;
};

const ExchangeContext = createContext<ContextProps>({
  exchanges: [],
  loading: false,
});

export default ExchangeContext;
