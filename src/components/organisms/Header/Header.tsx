import React from "react";

import { Box, Logo } from "src/components";

import { Wrapper, Container } from "./Header.styles";

function Header(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Box mx="auto">
          <Logo />
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Header;
