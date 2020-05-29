import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Flex, Logo } from "src/components";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primaryDark};
`;

export const Container = styled(Flex)`
  align-items: center;
  max-width: 1152px;
  padding: 0 32px;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 0 16px;
  }
`;

export const Button = styled.button`
  position: relative;
  color: ${({ theme }): string => theme.colors.invertedText};
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: none;
  outline: 0;
  padding: 0 16px;
  background-color: ${({ theme }): string => theme.colors.primaryDark};
  margin-left: 16px;

  :hover {
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
      max-width: 250px;
      width: 100%;
      display: flex;
      justify-content: center;
    `};
`;
