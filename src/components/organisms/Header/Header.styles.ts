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
  width: 100%;
  height: 100%;
`;
