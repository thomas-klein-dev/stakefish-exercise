import { useEffect, useState } from "react";

import ExchangePreview from "../models/exchangePreview";

type Props = {
  pageSize: number;
};

function useExchanges({ pageSize }: Props) {
  const [exchanges, setExchanges] = useState<ExchangePreview[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadExchanges = async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `https://api.coingecko.com/api/v3/exchanges?per_page=${pageSize}`
        );
        const json = await data.json();
        setExchanges(json);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    loadExchanges();
  }, []);

  return {
    exchanges,
    loading,
  };
}

export default useExchanges;
