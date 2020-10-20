import styled from "styled-components";

import { Card, Logo, Icons } from "src/components";

export const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: 16px;
  padding: 0 16px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 700px) {
    height: 48px;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled(Card)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.foreground};
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;

  @media screen and (max-width: 700px) {
    background-color: inherit;
    border-radius: 0;
    box-shadow: none;
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

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MobileButton = styled(Button)`
  background-color: inherit;
  color: ${({ theme }): string => theme.colors.textSecondary};
  display: none;
  font-size: 16px;
  padding: 0;
  margin-left: auto;

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

export const HeaderLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  max-width: calc(250px - 64px);
  width: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const ChevronIcon = styled(Icons.ChevronRight)`
  fill: ${({ theme }): string => theme.colors.primary};
  vertical-align: sub;

  @media screen and (max-width: 700px) {
    display: flex;
    fill: ${({ theme }): string => theme.colors.textSecondary};
    height: 20px;
    width: 20px;
  }
`;
