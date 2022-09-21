import { useEffect, useState } from "react";

import ExchangePreview from "../models/exchangePreview";

type Props = {
  pageSize: number;
};

function useExchanges({ pageSize }: Props) {
  const [exchanges, setExchanges] = useState<ExchangePreview[]>([]);

  useEffect(() => {
    const loadExchanges = async () => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/exchanges?per_page=${pageSize}`
        );
        const json = await data.json();
        setExchanges(json);
      } catch (e) {
        console.error(e);
      }
    };

    loadExchanges();
  }, []);

  return {
    exchanges,
  };
}

export default useExchanges;
