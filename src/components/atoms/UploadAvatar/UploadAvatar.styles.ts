import styled from "styled-components";

import { Flex } from "../Flex";
import { Icons } from "../Icons";

export const Wrapper = styled(Flex)`
  align-items: center;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const PhotoIcon = styled(Icons.FilledPhoto)`
  fill: ${({ theme }): string => theme.colors.opacityDarkGrey};
  height: 64px;
  width: 64px;
`;

export const Container = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.opacityGrey};
  display: none;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const FileInput = styled.input`
  border: none;
  cursor: pointer;
  height: 100%;
  margin: 0;
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 2;

  :hover + ${Container}, :focus + ${Container} {
    display: flex;
  }

  :disabled + ${Container} {
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};
    cursor: not-allowed;
    display: flex;
    opacity: 0.5;
  }
`;
