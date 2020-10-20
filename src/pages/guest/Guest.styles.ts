import styled from "styled-components";

import { Box, Card, Flex, H1, Icons, Text } from "src/components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 60px 0;
  position: relative;

  @media screen and (max-width: 700px) {
    height: calc(100% - 48px);
    max-width: 100%;
    padding: 0;
  }
`;

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 420px;
  width: 100%;

  @media screen and (max-width: 700px) {
    border-radius: 24px 24px 0 0;
    height: 100%;
    max-width: 100%;
    padding: 24px 16px 40px;
  }
`;

export const Header = styled(Flex)`
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled(H1)`
  font-weight: 600;
  margin: 0;
  max-width: 70%;

  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
`;

export const ChevronIcon = styled(Icons.ChevronRight)`
  fill: ${({ theme }): string => theme.colors.primary};
  height: 20px;
  vertical-align: sub;
  width: 20px;
`;

export const DividerContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  position: relative;
  width: 100%;

  @media screen and (max-width: 700px) {
    margin: 16px 0;
  }
`;

export const DividerText = styled(Text)`
  margin: 0 16px;
`;

export const Divider = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.border};
  height: 1px;
  width: 100%;
`;

export const GoogleIcon = styled(Icons.Google)`
  height: 20px;
  margin-right: 16px;
  width: 20px;

  @media screen and (max-width: 700px) {
    height: 24px;
    width: 24px;
  }
`;
