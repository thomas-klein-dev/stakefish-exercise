import { Outlet } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Header = styled.header`
  box-shadow: rgb(0 0 0 / 25%) 0px 0.125em 0.25em -0.125em;
  padding: 0.5rem 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

function Root() {
  return (
    <Container>
      <Header>
        <Title>Crypto Exchange Dashboard</Title>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Root;
