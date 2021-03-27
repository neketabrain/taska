import React, { FC } from 'react';
import styled from 'styled-components';

import { Box, Text, Button } from 'components';

const Container = styled(Box)`
  height: 100vh;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Home: FC = () => {
  return (
    <Container>
      <Title>My page</Title>
      <Text>Привет, мир!</Text>
      <Button variant="primary" disabled={false}>
        Click
      </Button>
    </Container>
  );
};

export default Home;
