import styled from "styled-components";

import { Flex } from "../Flex";
import { Icons } from "../Icons";

export const Wrapper = styled(Flex)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const PhotoIcon = styled(Icons.FilledPhoto)`
  fill: ${({ theme }): string => theme.colors.opacityDarkGrey};
  width: 64px;
  height: 64px;
`;

export const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }): string => theme.colors.opacityGrey};
  display: none;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  z-index: 2;
  opacity: 0;
  cursor: pointer;

  :hover + ${Container}, :focus + ${Container} {
    display: flex;
  }

  :disabled + ${Container} {
    display: flex;
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};
  }
`;
