import { useContext } from "react";

import styled from "styled-components";

import ExchangeContext from "../context/exchangeContext";
import ExchangeCard from "./ExchangeCard";

const Container = styled.div`
  @media (max-width: 768px) {
    padding: 0 1rem 1rem 1rem;
  }
`;

const List = styled.div`
  border: 1px solid ${(props) => props.theme.secondary};
`;

const EmptyText = styled.p`
  margin-left: 1rem;
`;

function ExchangesList() {
  const { exchanges, loading } = useContext(ExchangeContext);

  return (
    <Container>
      {exchanges.map((e) => (
        <ExchangeCard key={e.id} exchange={e} />
      ))}
      {!exchanges.length && <EmptyText>No exchanges to display</EmptyText>}
    </Container>
  );
}

export default ExchangesList;
