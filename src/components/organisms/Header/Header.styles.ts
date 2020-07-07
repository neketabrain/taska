import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Flex, Logo } from "src/components";

export const Wrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primaryDark};
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Container = styled(Flex)`
  align-items: center;
  height: 100%;
  justify-content: space-between;
  max-width: 1152px;
  padding: 0 32px;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 0 16px;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primaryDark};
  border: none;
  color: ${({ theme }): string => theme.colors.invertedText};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  height: 100%;
  margin-left: 16px;
  outline: 0;
  padding: 0 16px;
  position: relative;

  :hover,
  :focus {
    background-color: ${({ theme }): string => theme.colors.primaryDarkest};
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MobileButton = styled(Button)`
  display: none;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

export const HeaderLogo = styled(Logo)<{ isAuthorized: boolean }>`
  ${({ isAuthorized }): FlattenSimpleInterpolation | false =>
    isAuthorized &&
    css`
      display: flex;
      justify-content: center;
      max-width: 250px;
      width: 100%;
    `};
`;
