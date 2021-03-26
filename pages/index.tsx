import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Text = styled(Title).attrs({ as: 'p' })`
  font-size: 24px;
  color: black;
`;

const Home: FC = () => {
  return (
    <Container>
      <Title>My page</Title>
      <Text>Привет, мир!</Text>
    </Container>
  );
};

export default Home;
