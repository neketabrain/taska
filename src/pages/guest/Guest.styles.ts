import styled from "styled-components";

import { Box, Flex, H1, Card, Text, Icons } from "src/components";

export const Main = styled.main`
  position: relative;
  margin: 0 auto;
  padding: 60px 0;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 100%;
    padding: 0;
  }
`;

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 100%;
    padding: 60px 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 60px 16px;
  }
`;

export const Header = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 32px;
  align-items: baseline;
`;

export const Title = styled(H1)`
  max-width: 70%;
  margin: 0;
`;

export const ChevronIcon = styled(Icons.ChevronRight)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }): string => theme.colors.secondary};
  vertical-align: sub;
`;

export const DividerContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  position: relative;
`;

export const DividerText = styled(Text)`
  margin: 0 16px;
`;

export const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }): string => theme.colors.border};
`;

export const GoogleIcon = styled(Icons.Google)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;
