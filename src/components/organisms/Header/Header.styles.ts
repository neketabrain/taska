import styled from "styled-components";

import { Card, Logo, Icons } from "src/components";

export const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  margin: 16px auto 0;
  max-width: 1152px;
  padding: 0 32px;
  position: relative;
  width: 100%;
`;

export const Container = styled(Card)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.foreground};
  display: flex;
  height: 100%;
  justify-content: space-between;
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
  background-color: ${({ theme }): string => theme.colors.foreground};
  border: none;
  color: ${({ theme }): string => theme.colors.primary};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  margin-left: 16px;
  outline: 0;
  padding: 0 16px;
  position: relative;

  :hover {
    text-decoration: underline;
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

export const HeaderLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  max-width: calc(250px - 64px);
  width: 100%;
`;

export const ChevronIcon = styled(Icons.ChevronRight)`
  fill: ${({ theme }): string => theme.colors.primary};
  vertical-align: sub;
`;
