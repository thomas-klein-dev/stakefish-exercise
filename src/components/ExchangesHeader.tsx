import { ChangeEvent, memo, useContext } from "react";

import styled from "styled-components";

import SearchContext from "../context/searchContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const RightContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const SearchInput = styled.input`
  height: 2rem;
  min-width: 12rem;
  outline: none;
`;

function ExchangesHeader() {
  const { search, setSearch } = useContext(SearchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Container>
      <Title>Exchanges</Title>
      <RightContent>
        <SearchInput
          value={search}
          aria-label="payments-search-input"
          placeholder="Search by name or country..."
          onChange={handleChange}
        />
      </RightContent>
    </Container>
  );
}

export default memo(ExchangesHeader);
