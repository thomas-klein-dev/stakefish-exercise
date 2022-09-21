import { createContext } from "react";

import ExchangePreview from "../models/exchangePreview";

type ContextProps = {
  exchanges: ExchangePreview[];
};

const ExchangeContext = createContext<ContextProps>({
  exchanges: [],
});

export default ExchangeContext;
