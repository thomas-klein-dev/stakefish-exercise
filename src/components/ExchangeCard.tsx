import { Link } from "react-router-dom";

import styled from "styled-components";

import ExchangePreview from "../models/exchangePreview";

type Props = {
  exchange: ExchangePreview;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function ExchangeCard({ exchange }: Props) {
  return (
    <CardLink to={`/exchanges/${exchange.id}`}>
      <Container>
        <img src={exchange.image} />
        <span>{exchange.name}</span>
        <span>{exchange.country}</span>
        <span>{exchange.trust_score_rank}</span>
        <span>{exchange.url}</span>
      </Container>
    </CardLink>
  );
}

export default ExchangeCard;
