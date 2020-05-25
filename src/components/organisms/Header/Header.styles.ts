import styled from "styled-components";

import { Box } from "src/components";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  margin-bottom: 48px;
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  max-width: 1152px;
  width: 100%;
  height: 100%;
`;
