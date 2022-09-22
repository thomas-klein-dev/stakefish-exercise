import { ExchangesHeader, ExchangesList } from "../components";
import ExchangeProvider from "../context/ExchangeProvider";
import SearchProvider from "../context/SearchProvider";

function Exchanges() {
  return (
    <SearchProvider>
      <ExchangeProvider>
        <ExchangesHeader />
        <ExchangesList />
      </ExchangeProvider>
    </SearchProvider>
  );
}

export default Exchanges;
