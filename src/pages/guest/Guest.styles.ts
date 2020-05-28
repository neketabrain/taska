import styled from "styled-components";

import { Box, Flex, H1, Icons } from "src/components";

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;

  @media screen and (max-width: 480px) {
    max-width: 100%;
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
  margin: 20px 0;
  position: relative;
`;

export const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }): string => theme.colors.border};

  :first-of-type {
    margin-right: 16px;
  }

  :last-of-type {
    margin-left: 16px;
  }
`;

export const GoogleIcon = styled(Icons.Google)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;
