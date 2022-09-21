import { useEffect, useState } from "react";

type Props = {
  exchangeId: string;
};

function useExchangeDetails({ exchangeId }: Props) {
  const [exchange, setExchange] = useState(null);

  useEffect(() => {
    const loadExchange = async () => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
        );
        const json = await data.json();
        setExchange(json);
      } catch (e) {
        console.error(e);
      }
    };

    loadExchange();
  }, [exchangeId]);

  return {
    exchange,
  };
}

export default useExchangeDetails;
