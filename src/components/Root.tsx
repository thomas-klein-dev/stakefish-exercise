import { Outlet } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Header = styled.header`
  box-shadow: rgb(0 0 0 / 25%) 0px 0.125em 0.25em -0.125em;
`;

function Root() {
  return (
    <Container>
      <Header>This is my header</Header>
      <Outlet />
    </Container>
  );
}

export default Root;
