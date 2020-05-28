import styled from "styled-components";

import { Flex } from "src/components";

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
`;

export const Button = styled.button`
  position: relative;
  margin: 0 0 0 auto;
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

  :hover {
    background-color: ${({ theme }): string => theme.colors.primaryDarkest};
  }
`;
